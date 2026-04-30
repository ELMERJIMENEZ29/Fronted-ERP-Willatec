import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { AuthService } from '../../core/services/auth';
import { Router } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, Sidebar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  
  constructor(private auth: AuthService, private router: Router) {}

  logout() {
  this.auth.logout();
  this.router.navigate(['/login']);
}
}

