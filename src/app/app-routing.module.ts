import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CreateTourComponent } from './pages/create-tour/create-tour.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { TourListComponent } from './pages/tour-list/tour-list.component';
import { ToursComponent } from './pages/tours/tours.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'tours', component: ToursComponent },
      { path: 'tours-list', component: TourListComponent },
      { path: 'page',
         component: CreateTourComponent },
     
      { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default child route
    ]
  },
  { path: '**', redirectTo: '/login' } // Redirect any other invalid route to LoginComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
