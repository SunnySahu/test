import{Routes, RouterModule} from "@angular/router";

import { LoginComponent } from './login/login.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import {HomeComponent} from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
const capstoneRoutes: Routes=[
    {path:'sponsorship', component: SponsorshipComponent},
    {path:'home', component: HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'projects', component:ProjectsComponent}
    
    
    
    
];

export const routing= RouterModule.forRoot(capstoneRoutes);