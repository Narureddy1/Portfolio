import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursessComponent } from './coursess/coursess.component';
import { RegesterComponent } from './regester/regester.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import path from 'path';
import { HdashbordComponent } from './dashbord/hdashbord/hdashbord.component';
import { UserComponent } from './dashbord/user/user.component';
import { Home1Component } from './home1/home1.component';
import { SendMessageComponent } from './send-message/send-message.component';

const routes: Routes = [
  {
    path : "",
    component : Home1Component
  },
  {
    path: "home1",
    component:Home1Component
  },
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "coursess",
    component : CoursessComponent,
  },
  {
    path : "regester",
    component : RegesterComponent
  },
  
  {
    path : "header",
    component : HeaderComponent
  },
  {
    path : "footer",
    component : FooterComponent
  },
  {
    path: "Send_message",
    component: SendMessageComponent
  },
  {
    path : "dashbord",
    component : DashbordComponent,
    children : [
      {
        path : "",
        component : HdashbordComponent
      },
      {
        path : "hdashbord",
        component: HdashbordComponent
      },
      {
        path : "user",
        component : UserComponent
      }
      
    ]
  },
  {
    path : "**",
    component : PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
