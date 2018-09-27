import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { $ } from 'protractor';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
//import 'rxjs/add/operator/toPromise';
//import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'TestProject';

  private inputfield:any=[];
  public FormValue :any=[];
  departments: Array<any>;
  public emailName:any;
  public PasswordValue:any;
  public FirstNameValue:any;

constructor(private httpService: HttpClient){
  console.log("Constructor Called");
}

ngOnInit(){

console.log("Json schema initialized");
/*
this.inputfield = [{type:'email',name:'email',placeholder:'Enter Email Address',required:true},
                  {type:'password',name:'password',placeholder:'Enter Password',required:true},
                  {type:'text',name:'firstname',placeholder:'Enter First Name',required:true}
                  ]
*/
this.httpService.get('./assets/formdata.json').subscribe(
  data => {
    this.inputfield = data as string [];	
  },
  (err: HttpErrorResponse) => {
    console.log (err.message);
  }
);
      

}

send(){
  for(let entry of this.inputfield)
  {
    debugger;
    console.log("******Button Submit********");
    console.log("Key Is: "+ entry.name);
    console.log("Value Is: "+ entry.value);
    if(entry.name == "email")
    {
      this.emailName = entry.value;
    }
    if(entry.name == "password")
    {
      this.PasswordValue = entry.value;
    }
    if(entry.name == "firstname")
    {
      this.FirstNameValue = entry.value;
    }
    //this.emailName = entry.value;
    //console.log("Value Is: "+ $("input[name="+entry.name+"]").val());
    console.log("***************");
    //this.FormValue = entry.value as string [];

  }

  

}

}
