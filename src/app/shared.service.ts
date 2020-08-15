import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Percentage } from './table/Percentage.model';
@Injectable({
  providedIn: 'root'
})
export class SharedService {




  constructor(private http: HttpClient) { }
  
  getOptiondata(value: any): Observable<any[]> {
    return this.http.post<any[]>('http://localhost:8080/uploadfiles/getData',value);
  }
  

  getOptionValues(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/uploadfiles');
  }


  save(value: Percentage): Observable<any> {
    return this.http.post<any>('http://localhost:8080/uploadfiles/save',value);
  }

  getid(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/uploadfiles/id');
  }


}
