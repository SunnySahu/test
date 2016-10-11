import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from "./app.routing";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpComponent } from './http/http.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectItemComponent } from './projects/project-item.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SponsorshipComponent,
    HomeComponent,
    LoginComponent,
    HttpComponent,
    ProjectsComponent,
    ProjectListComponent,
    ProjectItemComponent,
    ProjectDetailComponent
    
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
