import { Component, OnInit } from '@angular/core';
import {DealsService}        from '../deals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  products: any = [];

  constructor(public dealsService: DealsService)
  {

    this.dealsService.getDeals().subscribe(data =>
    {
      this.products = data.couponfeed.link || [];

    });
  }

  ngOnInit() {
  }
}
