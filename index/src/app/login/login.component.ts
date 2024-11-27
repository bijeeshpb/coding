import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform:FormGroup;
  submitted:false

  constructor(private fb:FormBuilder){
    
  }
  ngOnInit():void{
    this.loginform=this.fb.group({
      login:['',[Validators.required,this.emailOrPhoneValidator]],
      
      
    });

   }
  

   emailOrPhoneValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
  
    if (!value) return null; 
  
    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const phonePattern = /^\d{10}$/;
  
    if (emailPattern.test(value) || phonePattern.test(value)) {
      return null; 
    }
  
    return { emailOrPhone: true }; 
  }
  onsubmit(hi:any){
    console.log("enter")
    if(this.loginform.valid){
      
      
      
    }
 else{
  
 }

  }

}
