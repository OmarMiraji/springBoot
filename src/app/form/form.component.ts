import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TourService } from '../tour.service';
import { ClassComponent } from '../class/class.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  [x:string]: any;
class = new ClassComponent;
  constructor(private tourService: TourService,
    private router: Router){}
  ngOnInit(): void {
    this.formConfiguration();
  }
  formGroup!:FormGroup;
  formConfiguration(){
    this.formGroup=new FormGroup({
      firstName: new FormControl('',Validators.required),
      secondName: new FormControl('',Validators.required),
      thirdName: new FormControl('',Validators.required),
      tellNumber: new FormControl('',Validators.required),
      visitName: new FormControl('',Validators.required),
      age: new FormControl('',Validators.required),

    })
    
  }
  saveform(){
    const data = this.formGroup.value;
    this.tourService['form'](data).subscribe(()=>{
    this.router.navigateByUrl('/class');

    })
  }
  goToTourList(){
    this.router.navigate(['/class']);
  }
    
  


 
  onsubmit() {
    console.log();
  }
}
  

