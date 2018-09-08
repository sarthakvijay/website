import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
/**
 * this component is for adding a course into the list of courses
 */
export class AddComponent {

  addform: FormGroup;
  validMessage: string = "";

  constructor(private courseService: CourseService) { }

  /** 
   * Form created for course addition by admin
  */
  ngOnInit() {
    this.addform = new FormGroup({
      course: new FormControl('', Validators.required),
      availability: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      lastDate: new FormControl('', Validators.required),
    });
  }

  /**
   * Method to add new course into list of courses suinf form filled data 
   */
  courseRegistration() {

    if (this.addform.valid) {
      this.validMessage = "Your Course  has been Submitted. Thank you!";
      this.courseService.courseAddRegistration(this.addform.value).subscribe(
        data => {
          this.addform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }

}
