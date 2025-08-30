import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {




  //public clr: any = "red"
  public clr:any = {red:false,green:false,blue:true}
  public sty:any ={"color":"red","border":"5px solid yellow","font-family":"verdana","background-color":"hotpink"}
  public course : any = "python"
  /*red(){
    this.clr="red"
  }
  green(){
    this.clr="green"
  }
  blue(){
    this.clr="blue"
  }*/
 red(){
  
  this.clr = {red:true,blue:false,green:false}
 }
 blue(){
  this.clr = {red:false,blue:true,green:false}
 }
 green(){
  this.clr = {red:false,blue:false,green:true}
 }
}
