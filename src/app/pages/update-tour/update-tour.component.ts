import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tour } from 'src/app/tour';
import { TourService } from 'src/app/tour.service';

@Component({
  selector: 'app-update-tour',
  templateUrl: './update-tour.component.html',
  styleUrls: ['./update-tour.component.css']
})
export class UpdateTourComponent implements OnInit {
  id!: number;
  tour: Tour = new Tour();
employee: any;

  constructor(
    private tourService: TourService,
    private route: ActivatedRoute,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.tourService.getTourById(this.id).subscribe(
      data => {
        this.tour = data;
      },
      error => console.log(error) 
    );
  }

  onSubmit() {
    this.tourService.updateTour(this.id, this.tour).subscribe(
      data => {
        this.goToTourList();
      },
      error => console.log(error) 
    );
  }

  goToTourList() {
    this.router.navigate(['/tour']); 
  }
}
