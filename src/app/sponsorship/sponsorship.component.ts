import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import{NgForm} from '@angular/forms';
@Component({
  selector: 'app-sponsorship',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.css'],
  providers:[HttpService]
})

export class SponsorshipComponent  {
 
    data={
  name:'',
  email:'',
  password:'',
  description:''

}
  

  

constructor(private httpService: HttpService){}


  onsignup(email:string,password:string){

this.httpService.sendData({email: email, password:password})
.subscribe(
  data=> console.log(data)
);
  }

  onSubmit(form: NgForm)
  {
    console.log(form);
    console.log(this.data);
  }
}