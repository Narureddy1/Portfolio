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
  ]

  constructor(){}
  ngOnInit(): void {}

  getCourse(x:any){
    console.log(x)
  }
}
