import {Component, OnInit} from '@angular/core';
import {HttpClient}        from '@angular/common/http';
import {DealsService}      from '../deals.service';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {


  products: any = [];

  constructor(public dealsService: DealsService) {

    this.products = this.dealsService.deals;
  }

  ngOnInit() {
    console.log(this.products);
  }


}
