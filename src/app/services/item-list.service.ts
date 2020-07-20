import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  listsUrl = 'assets/lists.json';

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get(this.listsUrl);
  }

}
