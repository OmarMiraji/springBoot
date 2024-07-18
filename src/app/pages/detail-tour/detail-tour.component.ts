import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { Tour } from 'src/app/tour';
import { TourService } from 'src/app/tour.service';

@Component({
  selector: 'app-detail-tour',
  templateUrl: './detail-tour.component.html',
  styleUrls: ['./detail-tour.component.css']
})
export class DetailTourComponent implements OnInit {
  id!: number;
  tour: Tour = new Tour(); // Initialize tour

  constructor(private route: ActivatedRoute, private tourService: TourService) {} // Correct constructor syntax

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.tourService.getTourById(this.id).subscribe(data => {
      this.tour = data;
    }, error => console.log(error)); // Add error handling
  }
}
