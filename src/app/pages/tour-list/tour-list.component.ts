import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Tour } from 'src/app/tour';
import { TourService } from 'src/app/tour.service';


@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {
  tours: Tour[] = [];

  constructor(@Inject(TourService) private tourService: TourService, private router: Router) {}

  ngOnInit(): void {
    this.getTourList();
  }

  getTourList() {
    this.tourService.getTourList().subscribe(
      (data: Tour[]) => {
        this.tours = data;
      },
      (error: any) => {
        console.log('Error fetching tours:', error);
      }
    );
  }

  tourDetails(id: number) {
    this.router.navigate(['tour-details', id]);
  }

  updateTour(id: number) {
    this.router.navigate(['update-tour', id]);
  }

  deleteTour(id: number) {
    this.tourService.deleteTour(id).subscribe(() => {
      console.log('Tour deleted successfully.');
      this.getTourList(); // Refresh tour list after deletion
    });
  }
}
