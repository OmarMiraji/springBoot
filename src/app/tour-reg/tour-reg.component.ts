import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { TourService } from '../tour.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tour-reg',
  templateUrl: './tour-reg.component.html',
  styleUrls: ['./tour-reg.component.css']
})
export class TourRegComponent implements OnInit  {

  tour: Tour = new Tour();
  
  constructor(private tourService: TourService, private router: Router) {}

  ngOnInit(): void {}

  saveTour() {
    this.tourService.createTour(this.tour).subscribe(data => {
      console.log(data);
      this.goToTourList();

      alert("Tour Created Successfull!")
    },
    error =>{
      alert("Fail to Create Tour")
    });
      
  }
  
  goToTourList() {
    this.router.navigate(['/tours']);
  }

 onSubmit() {
    console.log(this.tour);
    this.saveTour();
  }

}
