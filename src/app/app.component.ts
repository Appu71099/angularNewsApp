import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from './Service/theme-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'newsApp';
  
  isDarkMode = false;

  constructor(private themeService:ThemeServiceService){}
  ngOnInit(): void {
    
    this.themeService.initTheme();
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
  }

toggleTheme():void{
  this.isDarkMode = !this.isDarkMode;
  this.themeService.toggleDarkTheme(this.isDarkMode);
}
 
}
