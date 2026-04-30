import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';

  showPassword = false;
  error = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.error = '';

    // VALIDACIONES (frontend)
    if (!this.email || !this.password) {
      this.error = 'Complete todos los campos';
      return;
    }

    this.loading = true;

    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.loading = false;

        // mensaje backend o fallback
        this.error = err?.error?.message || 'Error al iniciar sesión';
      }
    });
  }
}