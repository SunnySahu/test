import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import{NgForm} from '@angular/forms';
import {Response} from "@angular/http";
@Component({
  selector: 'app-sponsorship',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.css'],
  providers:[HttpService]
})

export class SponsorshipComponent implements OnInit  {
 
    data={
  name:'',
  email:'',
  password:'',
  description:''

}
  

  

constructor(private httpService: HttpService){}

ngOnInit(){
  this.httpService.getData()
  .subscribe(
    (data: Response)=> console.log(data)
  );
}


  onSubmit(form: NgForm)
  {
    console.log(form);
    console.log(this.data);
    this.httpService.sendData({name:form})
.subscribe(data=> console.log(data));
   
  }
}