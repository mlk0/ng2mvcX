import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  fg: FormGroup;
  host : string;
  envName : string;
  constructor(fb: FormBuilder) {
   
  
  
    this.fg = fb.group(
      {
        'email': ['some.body@finastra.com', Validators.required],
        'password': ['', Validators.required]
      }

    );

  }

  ngOnInit() {

    //call some config service to retrieve the env settings
    this.host =  environment.host; //  "http://localhost:26063"
    this.envName = environment.environmentName;
  }

  OnFormSubmitted(fgValue:any){
    console.log(fgValue);
  }

}
