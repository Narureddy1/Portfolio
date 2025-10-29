import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',

  
})
export class HeaderComponent {
  

public navs : any [] = [
  {
    name: "Home",
    url:"/home1",
    sub : []
  },
  /*{
    name : "home",
    url : "/home",
    sub : []
  },*/
  {
    name : "About",
    url : "/about",
    sub : []
  },
  {
    name : "Contact",
    url : "/contact",
    sub : []
  },
  {
    name : "Skills",
    url : "/home",
    sub : []
  },
  {
    name : "Coursess",
    url : "/coursess",
    sub :[
          {
            name:"html",
            url : "/html"
          },
          {
            name : "css",
            url : "/css"
          },
          {
            name : "bootstrap",
            url : "/bootstrap"
          }
        ]
  },
  
  {
    name : "Dashbord",
    url : "/dashbord",
    sub : []
  },
  {
    name : "",
    url : "",
    sub : []
  },
  
  {
    name : "Send_message",
    url : "/Send_message",
    sub : []
  }
]
}
