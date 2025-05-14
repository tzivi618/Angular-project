import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { ParticipantComponent } from './components/participant/participant.component';

export const routes: Routes = [ 
    {path: '',component:LoginComponent},
    {path: 'login',component:LoginComponent},
    //{path :'lessons' , component:LessonsComponent,title:'Lessons'},
    {path: 'lessons/:id', component:LessonsComponent},
    {path: 'participant',component:ParticipantComponent},
   // {path:'**',redirectTo:''},
];
