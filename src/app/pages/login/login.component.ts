import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  loading = false;
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.auth.isAuthenticated) {
      this.router.navigate(['/docs'], { replaceUrl: true });
    }
  }

 async onLogin() {
  this.error = '';
  this.loading = true;

  const cleanUser = this.username.trim();
  const cleanPass = this.password.trim();

  try {
    await this.auth.login(cleanUser, cleanPass);
    this.router.navigate(['/docs'], { replaceUrl: true });
  } catch (e) {
    this.error = 'Credenciales inválidas.';
  } finally {
    this.loading = false;
  }
}

}
