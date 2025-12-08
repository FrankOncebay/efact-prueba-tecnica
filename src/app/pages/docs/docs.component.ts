import { Component, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { finalize, Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { FilesService } from '../../services/files/files.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})

// Pantalla principal: permite ver el comprobante en PDF, XML y CDR usando el ticket de la prueba.
export class DocsComponent implements OnDestroy {
  ticket = '571cc3a3-5b1f-4855-af26-0de6e7c5475f';

  xml: string | null = null;
  cdr: string | null = null;
  pdfUrl: SafeResourceUrl | null = null;

  activeView: 'pdf' | 'xml' | 'cdr' | null = null;

  loadingXml = false;
  loadingCdr = false;
  loadingPdf = false;
  error = '';

  private destroy$ = new Subject<void>();
  private currentPdfObjectUrl: string | null = null;

  constructor(
    public auth: AuthService,
    private files: FilesService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    if (this.currentPdfObjectUrl) {
      URL.revokeObjectURL(this.currentPdfObjectUrl);
      this.currentPdfObjectUrl = null;
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login'], { replaceUrl: true });
  }

  private resetStateFor(view: 'pdf' | 'xml' | 'cdr') {
    this.error = '';
    this.activeView = view;

    
    this.loadingPdf = view === 'pdf';
    this.loadingXml = view === 'xml';
    this.loadingCdr = view === 'cdr';

    
    if (view !== 'pdf') this.pdfUrl = null;
    if (view !== 'xml') this.xml = null;
    if (view !== 'cdr') this.cdr = null;
  }

  loadPdf() {
    this.resetStateFor('pdf');

    
    if (this.currentPdfObjectUrl) {
      URL.revokeObjectURL(this.currentPdfObjectUrl);
      this.currentPdfObjectUrl = null;
    }

    this.files
      .getPdf(this.ticket)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (blob) => {
          this.currentPdfObjectUrl = URL.createObjectURL(blob);
          this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            this.currentPdfObjectUrl
          );

        
        },
        error: (err) => {
          console.error(err);
          this.error = 'No se pudo obtener el PDF.';
          this.loadingPdf = false;
        },
      });
  }

  onPdfLoaded() {
  
    if (this.activeView === 'pdf') {
      this.loadingPdf = false;
    }
  }

  loadXml() {
    this.resetStateFor('xml');

    this.files
      .getXml(this.ticket)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => {
    
          if (this.activeView === 'xml') {
            this.loadingXml = false;
          }
        })
      )
      .subscribe({
        next: (blob) => {
          blob.text().then((text) => {
            if (this.activeView === 'xml') {
              this.xml = text;
            }
          });
        },
        error: (err) => {
          console.error(err);
          this.error = 'No se pudo obtener el XML.';
        },
      });
  }

  loadCdr() {
    this.resetStateFor('cdr');

    this.files
      .getCdr(this.ticket)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => {
          if (this.activeView === 'cdr') {
            this.loadingCdr = false;
          }
        })
      )
      .subscribe({
        next: (blob) => {
          blob.text().then((text) => {
            if (this.activeView === 'cdr') {
              this.cdr = text;
            }
          });
        },
        error: (err) => {
          console.error(err);
          this.error = 'No se pudo obtener el CDR.';
        },
      });
  }

  copyTicket() {
    if (!navigator.clipboard) return;

    navigator.clipboard.writeText(this.ticket).catch((err) => {
      console.error('No se pudo copiar el ticket', err);
    });
  }
}
