import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dheader',
  templateUrl: './dheader.component.html',
  styleUrl: './dheader.component.css'
})
export class DheaderComponent {

  constructor(public r:Router){}

  logOut(){
    this.r.navigate(['/login'])
  }
}
