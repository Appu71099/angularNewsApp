import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  private darkThemeClass = 'dark-theme';

  constructor() { }

  toggleDarkTheme(isDarkMode:boolean):void{

    if(isDarkMode){
      document.body.classList.add(this.darkThemeClass);
      localStorage.setItem('theme','dark')
    }else{
      document.body.classList.remove(this.darkThemeClass);
      localStorage.setItem('theme','light')
    }
  }

  initTheme():void{
    const savedTheme = localStorage.getItem('theme') || 'light';
    const isDarkMode = savedTheme === 'dark';
    this.toggleDarkTheme(isDarkMode);
  }
}
