import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { FilesService } from '../../services/files/files.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent {

  ticket = '571cc3a3-5b1f-4855-af26-0de6e7c5475f';

  xml: string | null = null;
  cdr: string | null = null;
  pdfUrl: SafeResourceUrl | null = null;

  activeView: 'pdf' | 'xml' | 'cdr' | null = null;

  loadingXml = false;
  loadingCdr = false;
  loadingPdf = false;
  error = '';

  constructor(
    public auth: AuthService,
    private files: FilesService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  logout() {
  this.auth.logout();
  this.router.navigate(['/login'], { replaceUrl: true });
}


  loadPdf() {
    this.error = '';
    this.loadingPdf = true;
    this.activeView = 'pdf';
    this.xml = null;
    this.cdr = null;

    this.files.getPdf(this.ticket).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        this.loadingPdf = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'No se pudo obtener el PDF.';
        this.loadingPdf = false;
      }
    });
  }

  loadXml() {
    this.error = '';
    this.loadingXml = true;
    this.activeView = 'xml';
    this.xml = null;
    this.cdr = null;

    this.files.getXml(this.ticket).subscribe({
      next: (blob) => {
        blob.text().then(text => {
          this.xml = text;
          this.loadingXml = false;
        });
      },
      error: (err) => {
        console.error(err);
        this.error = 'No se pudo obtener el XML.';
        this.loadingXml = false;
      }
    });
  }

  loadCdr() {
    this.error = '';
    this.loadingCdr = true;
    this.activeView = 'cdr';
    this.cdr = null;
    this.xml = null;

    this.files.getCdr(this.ticket).subscribe({
      next: (blob) => {
        blob.text().then(text => {
          this.cdr = text;
          this.loadingCdr = false;
        });
      },
      error: (err) => {
        console.error(err);
        this.error = 'No se pudo obtener el CDR.';
        this.loadingCdr = false;
      }
    });
  }
}
