import {Routes}          from '@angular/router';
import {AppComponent}    from './app.component';
import {DealsComponent}  from './deals/deals.component';
import {HomeComponent}   from './home/home.component';
import {StoresComponent} from './stores/stores.component';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'stores',
    component: StoresComponent
  },
  {
    path: 'deals',
    component: DealsComponent
  },
  {
    path:'*',
    component:AppComponent
  }
];
