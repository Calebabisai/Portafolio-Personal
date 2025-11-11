import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Courses } from './pages/courses/courses';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Skills} from './pages/skills/skills';


export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about', component: About},
    {path: 'skills', component: Skills},
    {path: 'projects', component: Projects},
    {path: 'courses', component: Courses},
    {path: 'contact', component: Contact},
    {path: '**', redirectTo: ''},
];
