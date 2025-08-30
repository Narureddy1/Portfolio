import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursessComponent } from './coursess/coursess.component';
import { RegesterComponent } from './regester/regester.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HtmlComponent } from './html/html.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HdashbordComponent } from './dashbord/hdashbord/hdashbord.component';
import { UserComponent } from './dashbord/user/user.component';
import { DheaderComponent } from './dashbord/dnav/dheader.component';
import { Home1Component } from './home1/home1.component';
import { SendMessageComponent } from './send-message/send-message.component';

import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursessComponent,
    RegesterComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    HtmlComponent,
    DashbordComponent,
    PageNotFoundComponent,
    HdashbordComponent,
    UserComponent,
    DheaderComponent,
    Home1Component,
    SendMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
