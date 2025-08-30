import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',

  
})
export class HeaderComponent {
  

public navs : any [] = [
  {
    name: "home1",
    url:"/home1",
    sub : []
  },
  /*{
    name : "home",
    url : "/home",
    sub : []
  },*/
  {
    name : "about",
    url : "/about",
    sub : []
  },
  {
    name : "contact",
    url : "/contact",
    sub : []
  },
  {
    name : "home",
    url : "/home",
    sub : []
  },
  {
    name : "coursess",
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
    name : "dashbord",
    url : "/dashbord",
    sub : []
  },
  {
    name : "",
    url : "",
    sub : []
  },
  {
    name : "regester",
    url : "/regester",
    sub : []
  },
  {
    name : "Send_message",
    url : "/Send_message",
    sub : []
  }
]
}
