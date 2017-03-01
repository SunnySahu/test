import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import{NgForm} from '@angular/forms';
import 'rxjs/Rx';
@Injectable()
export class HttpService {

  constructor(private http: Http) { }

getData()
{
  return this.http.get('https://authentication-51807.firebaseio.com/title.json');
}


sendData(user:any){
  const body=JSON.stringify(user);
  return this.http.post('https://authentication-51807.firebaseio.com/data.json', body)
  .map((data: Response)=> data.json());
}

}
