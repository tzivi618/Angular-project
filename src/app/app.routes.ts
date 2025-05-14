import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { ParticipantComponent } from './components/participant/participant.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { InvalidPageComponent } from './components/invalid-page/invalid-page.component';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    {path: 'login', component: LoginComponent},
    // {path:'**', redirectTo: '', pathMatch: 'full' },
    {path:'participant',component:ParticipantComponent},
    {path:'lessons/:teacherId',component:LessonsComponent},
    {path:'**',component:InvalidPageComponent},
];
