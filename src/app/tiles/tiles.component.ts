import {Component, Input, OnInit} from '@angular/core';
import {DealsService}             from '../deals.service';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit
{

  @Input('products')products: any = [];

  constructor()
  {

  }

  ngOnInit()
  {

  }

  productDetails(product)
  {
    window.open(product.clickurl)
  }

}
