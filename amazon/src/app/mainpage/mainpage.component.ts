import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  show:boolean=false

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Adjust the scroll offset value as needed
    // const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // 
    
      const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.show = scrollOffset > 0;
    
  }

  isModalOpen = false;

  showDisclaimer() {
      this.isModalOpen = true;
  }
  close(){
    this.isModalOpen = false;
  }
}



