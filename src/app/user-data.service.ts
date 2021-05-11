import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor(private http:any) { }
  getApidata(){
    let url = '';
    return this.http.get(url);
  }
}
