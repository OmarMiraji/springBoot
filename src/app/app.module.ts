import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CreateTourComponent } from './pages/create-tour/create-tour.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { TourListComponent } from './pages/tour-list/tour-list.component';
import { ToursComponent } from './pages/tours/tours.component';
import { TourRegComponent } from './tour-reg/tour-reg.component';
import { FormComponent } from './form/form.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ClassComponent } from './class/class.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainLayoutComponent,
    AboutUsComponent,
    CreateTourComponent,
    DetailComponent,
    LoginComponent,
    TourListComponent,
    ToursComponent,
    TourRegComponent,
    SignUpComponent,
    FormComponent,
    ClassComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
