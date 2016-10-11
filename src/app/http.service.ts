import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/Rx'
@Injectable()
export class HttpService {

  constructor(private http: Http) { }



sendData(user:any){
  const body=JSON.stringify(user);
  return this.http.post('https://authentication-51807.firebaseio.com/data.json', body)
  .map((data:Response)=> data.json());
}

}
