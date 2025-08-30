import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Student{
  fname :string,
  lname :string,
  email :string,
  phone :string,
  password :string,
  cpassword :string
}
@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrl: './regester.component.css'
})
export class RegesterComponent {
 public student : Student = {fname : "", lname : "", email : "", phone : "", password : "", cpassword :""}

public msg:any
public clr : any = {red: false,green:false}

constructor(public http : HttpClient){}


reg(){
  const data = new FormData()
  data.append("fname",this.student.fname)
  data.append("lname",this.student.lname)
  data.append("email",this.student.email)
  data.append("ph",this.student.phone)
  data.append("pwd",this.student.fname)


  console.log(this.student)
  this.http.post("http://ilandertech.com/api/index.php/Welcome/AddStuRegister",data).subscribe((result:any)=>{
    console.log(result)

    this.msg = result.message
    if(result.status === 1){
      this.clr = {red:false,green:true}
    }else{
      this.clr = {red:true, green:false}
    }
  })
 }
}
