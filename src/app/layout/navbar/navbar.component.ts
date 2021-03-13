import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e:any) {
      let element = document.querySelector('.navbar');
    }
  ngOnInit(): void {
  }

}
