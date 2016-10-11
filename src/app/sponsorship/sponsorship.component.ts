import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-sponsorship',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.css'],
  providers:[HttpService]
})

export class SponsorshipComponent  {
 
    
  

constructor(private httpService: HttpService){}


  onsignup(email:string,password:string){

this.httpService.sendData({email: email, password:password})
.subscribe(
  data=> console.log(data)
);
  }
}