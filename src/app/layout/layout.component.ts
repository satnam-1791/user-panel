import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    constructor(@Inject(DOCUMENT) private document: Document,private element: ElementRef) { }
  
    ngOnInit(): void {
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
     var navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
      if (document.body.scrollTop > 100 ||     
      document.documentElement.scrollTop > 100) {
        navbar.classList.remove('navbar-transparent');
      }else{
        navbar.classList.add('navbar-transparent');
      }
    }
}
