import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DealsService
{

  constructor(private http: HttpClient)
  {
  }

  public getCategories(): Observable<any[]>
  {
    return this.http.get<any[]>('/api/getCategories');
  }

  public getCategoryDeals(id:string): Observable<any[]>
  {
    return this.http.get<any>(`/api/getCategoryDeals/${id}`);
  }

  public getDeals(): Observable<any>
  {
    return this.http.get<any>('/api/getDeals');
  }
}
