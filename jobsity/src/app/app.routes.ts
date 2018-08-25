import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';


const routes: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'ayuda', component: HelpComponent },
    { path: '**', pathMatch:'full', redirectTo: 'inicio' }
];

export const appRouting = RouterModule.forRoot(routes);