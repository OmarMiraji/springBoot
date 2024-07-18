import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Tour } from 'src/app/tour';
import { TourService } from 'src/app/tour.service';

@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.css']
})
export class CreateTourComponent  {
  tour: Tour = new Tour();
formGroup!: FormGroup<any>;

  constructor(private tourService: TourService, private router: Router) {}




}
