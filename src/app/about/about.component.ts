import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  public coursess : any [] =[
    {
      img : "../images/InternPy.jpeg",
      title : "python Internship",
      paragraph : "It certifies that Naru Ramana Reddy (Y213214138) from Vasavi Degree College, Narasaraopeta, has successfully completed a Long Term Internship in Python Programming.",
        Duration : "From 18/01/2024 to 19/04/2024",
      Issued : "22/04/2024",
      Id : "UCE24VDC103",
      IssuedAt : "UrChice Computer Education, Sattenapalli, Sattenapalli, Palnadu District, Andhra Pradesh, India",
      
    },
    {
      img : "../images/CareerNinja.jpeg",
      title : "Advance Java",
      paragraph : " This image is a Certificate of Achievement awarded by CareerNinja (LearnTube). It certifies that Ramanareddy Naru has successfully completed the course Java Advanced (English)",
        Duration : "From 18/08/2023 to 17/17/2023",
      Issued : "12/17/2023",
      Id : "JAV20238251X",
      IssuedBy : "Shronit Ladhani, Founder and CEO, CareerNinja",
      
    },
   
  ]

  constructor(){}
  ngOnInit(): void {}

  getCourse(x:any){
    console.log(x)
  }
}

