import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  slideOptions = {
    nav: false,
    dots: true,
    loop: true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverpause: true,
    responsiveClass: true,
    // responsive object contains responsive options.
    responsive: {
      0: {
        items: 1,
        dots: false
      },
      400: {
        items: 2,
        dots: false
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      },
      1500: {
        items: 6
      }
    }
  }

  SlideMain ={
    items: 1,
    nav: false,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 11000,
    autoplayHoverpause: true,
  }
  
  ngOnInit(): void {
  }

  img = [ /* 2200x340 */
    'https://i.ibb.co/TcqHms9/Habbo-Banner-Mant.png',
    'https://i.ibb.co/wyW0PCM/Habbo-Banner.png',
    'https://i.ibb.co/zSnWGz1/Ya-disponible.png',
  ]

  OwlURLS = [
    'https://i.ibb.co/z7G50DZ/Music.png',
    'https://i.ibb.co/xj14YWK/Cellphone.png',
    'https://i.ibb.co/DYF8YmF/Upgrade.png',
    'https://i.ibb.co/mBQHFzJ/Rest.png',
    'https://i.ibb.co/QQ7xRBc/Play.png',
    'https://i.ibb.co/xJ3N6KZ/Sleep.png'
  ]

}
