import { Component, OnInit }      from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap}                from 'rxjs/operators';
import {DealsService}             from '../deals.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public products:any[]=[];

  constructor(private route: ActivatedRoute,
              private dealsService:DealsService) { }

  ngOnInit() {

    this.route.params.subscribe((params: ParamMap)=>
      {
        this.dealsService.getCategoryDeals(params['id']).subscribe(data=>{

          this.products =data;
        });
      })
  }

}
