import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';
import { SetupComponent } from './setup/setup.component';
import { ProfileComponent } from './profile/profile.component';
import { HelpComponent } from './help/help.component';
import { mainRoutes } from './main/main.router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: WelcomeComponent},
    {path: 'setup', component: SetupComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'help', component: HelpComponent},
    {path: 'main', component: MainComponent, children: mainRoutes} 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);