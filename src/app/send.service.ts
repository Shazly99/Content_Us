import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendService {

  constructor(private _HttpClient:HttpClient) { }

  sendContent(body:any):Observable<any>{
   return  this._HttpClient.post(`https://takidapp.com:8007/api/ContactUs/Add`,body)
  }
}
