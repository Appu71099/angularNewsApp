import { Component } from '@angular/core';
import { ThemeServiceService } from 'src/app/Service/theme-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isDarkMode = false;

  constructor(private themeService: ThemeServiceService) {}

  ngOnInit(): void {
    // Initialize theme based on user's preference or default theme
    this.themeService.initTheme();
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.toggleDarkTheme(this.isDarkMode);
  }

}
