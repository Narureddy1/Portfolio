import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { subscribe } from 'diagnostics_channel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public data1:any = new FormGroup({
    email : new FormControl("", Validators.required),
    password : new FormControl("",Validators.required)
  })
  public submited : boolean = false
  public msg : any;
  public clr : any = {red:false,green:false}

  constructor(public api:HttpClient, public r:Router){}

  get form(){
    return this.data1.controls
  }


  login(){
    this.submited = true
    console.log(this.data1.value)

    const data = new FormData()
    data.append("userEmail", this.data1.value.email)
    data.append("userPasswrod", this.data1.value.emil)

    this.api.post("http://ilandertech.com/api/index.php/Welcome/StuLogin",data).subscribe((res:any)=>{
      console.log(res)
      this.msg = res.message
      if(res.status == 1){

        this.clr = {red:false,green:true}

        localStorage.setItem("email",this.data1.value.email)
        
        setTimeout(()=>{
          this.r.navigate(['/dashbord'])
        },3000)
        
      }else{
        this.clr = {red:true,green:false}
      }
    })

  }
  
}
