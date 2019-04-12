import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  items: Array<any> = [];
   // imgpath: string = "assets/img/hs";

  constructor() {
    this.items = [
      { name: 'assets/img/hs/hs-product-1.jpg' },
      { name: 'assets/img/hs/hs-product-2.jpg' },
      { name: 'assets/img/hs/hs-product-3.jpg' },
      { name: 'assets/img/hs/hs-product-3.jpg' },
      { name: 'assets/img/hs/hs-product-3.jpg' }
    ];
  }
}
