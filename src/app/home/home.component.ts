import { Component, OnInit } from '@angular/core';
import { on } from 'node:events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public course : any [] =[
    {
      img : "../images/html.png",
      title : "HTML",
      paragraph : "lorem lj lhsldkjf laskjdf is so good boy so he went to the hydrabad. Now he is studing in bangalore",
      
    },
    {
      img : "../images/css.png",
      title : "CSS",
      paragraph : "lorem lj lhsldkjf laskjdf is so good boy so he went to the hydrabad. Now he is studing in bangalore",
      
    },
    {
      img : "../images/bootstrap.jfif",
      title : "BootStrap",
      paragraph : "lorem lj lhsldkjf laskjdf is so good boy so he went to the hydrabad. Now he is studing in bangalore",
    
    },
    {
      img : "../images/javascript.jpg",
      title : "JavaScript",
      paragraph : "lorem lPython.pngj lhsldkjf laskjdf is so good boy so he went to the hydrabad. Now he is studing in bangalore",
      
    },
    {
      img : "../images/angular.jpg",
      title : "Angular",
      paragraph : "lorem lPython.pngj lhsldkjf laskjdf is so good boy so he went to the hydrabad. Now he is studing in bangalore",
      
    },
    {
      img : "../images/java.jpg",
      title : "java",
      paragraph : "lorem lPython.pngj lhsldkjf laskjdf is so good boy so he went to the hydrabad. Now he is studing in bangalore",
      
    },
    {
      img : "../images/python.jpeg",
      title : "Python",
      paragraph : "lorem lPython.pngj lhsldkjf laskjdf is so good boy so he went to the hydrabad. Now he is studing in bangalore",
      
    },
    {
      img : "../images/ADF.webp",
      title : "Azure Data Factory",
      paragraph : "lorem lPython.pngj lhsldkjf laskjdf is so good boy so he went to the hydrabad. Now he is studing in bangalore",
      
    }
  ];

  public featuredCourse : any [] = [
    {
    title: 'Pathway to sustainable innovation',
    details: [
      'To build a crowdfunding web application where users can create fundraising campaigns, contribute funds and track progress.',
      'Used Angular, JavaScript, and Bootstrap to design an interactive and responsive frontend.',
      'Implemented backend with Spring Boot, Spring MVC, and Spring Security to create secure REST APIs for user authentication, campaign management, and transactions.',
      'Used MySQL database with Hibernate ORM for efficient data storage and retrieval of users, campaigns, and donation details.'
    ],
    imageUrl: '../images/idea.webp' // Make sure you have an image at this path
},
    {
    title: 'Banking Management system',
    details: [
      'Objective: To create a user account and maintaining the account balance, deposit, transform the money to another account.',
      'Used JAVA and SQL to store and manipulating the account details.',
      'By using the security pin we can visit the account, we can deposit and with draw the amount as well as the data in SQL will change.',
    ],
    imageUrl: '../images/Bank.webp' // Make sure you have an image at this path
},


];

  constructor(){}
  ngOnInit(): void {}

  getCourse(x:any){
    console.log(x)
  }
}
