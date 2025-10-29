import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursess',
  templateUrl: './coursess.component.html',
  styleUrl: './coursess.component.css'
})
export class CoursessComponent implements OnInit{
  public coursess : any [] =[
    {
      img : "../images/Python.png",
      title : "python",
      paragraph : "lorem lj lhsldkjf laskjdf is so good boy so he went to the hydrabad. Now he is studing in bangalore",
      fees : 12000,
      duration : "1year",
      more : "Read More"
    },
    {
      img : "../images/css.png",
      title : "CSS",
      paragraph : "lorem lj lhsldkjf laskjdf is so good boy so he went to the hydrabad. Now he is studing in bangalore",
      fees : 12000,
      duration : "1year",
      more : "Read More"
    },
    {
      img : "../images/cpp.webp",
      title : "c++",
      paragraph : "lorem lj lhsldkjf laskjdf is so good boy so he went to the hydrabad. Now he is studing in bangalore",
      fees : 12000,
      duration : "1year",
      more : "Read More"
    },
    {
      img : "../images/bootstrap.jfif",
      title : "Bootstrap",
      paragraph : "lorem lPython.pngj lhsldkjf laskjdf is so good boy so he went to the hydrabad. Now he is studing in bangalore",
      fees : 12000,
      duration : "1year",
      more : "Read More"
    }
  ];
  featuredCourse = {
    title: 'Mastering Angular: From Beginner to Pro',
    content: 'Dive deep into the Angular framework and learn to build powerful, scalable web applications. This course covers everything from the basics of components and services to advanced topics like RxJS, state management, and performance optimization. Join us to become an Angular expert!',
    imageUrl: 'assets/images/featured-course.jpg' // Make sure you have an image at this path
  };

  constructor(){}
  ngOnInit(): void {}

  getCourse(x:any){
    console.log(x)
  }
}
