import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  products: any = [
    {
      'name': 'Test 1',
      'imgURL': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      'description': 'TEST test',
      'price': 50.50,
      'additionalText': 'Free Shipping'
    },
    {
      'name': 'Test 1',
      'imgURL': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      'description': 'Dog Food',
      'price': 80.50,
      'additionalText': 'Free Shipping'
    },
    {
      'name': 'Test 1',
      'imgURL': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      'description': 'Dog Food',
      'price': 50.50,
      'additionalText': 'Free Shipping'
    },
    {
      'name': 'Test 1',
      'imgURL': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      'description': 'Dog Food',
      'price': 50.50,
      'additionalText': 'Free Shipping'
    },
    {
      'name': 'Test 1',
      'imgURL': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      'description': 'Dog Food',
      'price': 50.50,
      'additionalText': 'Free Shipping'
    }
  ];

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    console.log(this.products);
  }


}
