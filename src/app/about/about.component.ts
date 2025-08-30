import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
public table:any[] = [
  {
    sno : 1,
    name : "New Horizon College of Engenering",
    img : "../images/angular.jpg",
    data : "Marathahalli, Bengaluru, karnataka",
    fees : "2024-2026",
    total : "82 %"
  },
  {
    sno : 2,
    name : "Vasavi Degree College",
    img : "bootstrap.jfif",
    data : "Narasaraopet, Gunture(Dts), Andhra Pradesh",
    fees : "2021-2024",
    total : "85 %"
  },
  {
    sno : 3,
    name : "Vikas junior college",
    img : "csharp.png",
    data : "Narasaraopet, Gunture(Dts), Andhra predesh",
    fees : "2019-2021",
    total : "72 %"
  },
  {
    sno : 4,
    name : "Ravindra High School",
    img : "css.png",
    data : "Vinukonda, Palnadu(Dts), Andhra Predesh",
    fees : "2018-2019",
    total : "92 %"
  }
]
}

