import { Component, OnInit } from '@angular/core';
import {DealsService}        from '../deals.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  constructor(private dealsService: DealsService) { }

  public categories : any[] =[];
  ngOnInit() {

    this.dealsService.getCategories().subscribe(categories=>{
      this.categories = categories;
    })
  }

}
