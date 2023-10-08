import { Component } from '@angular/core';
import {FormGroup,Validator,FormBuilder } from '@angular/forms'
import{ Router } from '@angular/router'
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
userName : string ='';
password : string ='';
inputField:boolean=false;

constructor(private route:Router, private service: ServiceService){}
ngOnInit(){

}


loginBtn(){
this.inputField = !this.inputField


localStorage.setItem('user',this.userName,);
localStorage.setItem('pwd',this.password);

if(this.userName=="Admin" && this.password==="Admin@123"){
this.route.navigate(['/home']);
}else{
  alert("Invalid UserName or Password");
  this.userName='';
  this.password='';
}
}


}
