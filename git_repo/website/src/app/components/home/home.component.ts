import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public courses;

  /**
   * courses addition for  message string
   */
  courseform: FormGroup;
  validMessage: string = "";


  constructor(private courseService: CourseService) { }

  ngOnInit() {
    /**
     * form to enroll for courses by user
     */
    this.courseform = new FormGroup({
      name: new FormControl('', Validators.required),
      employeeId: new FormControl('', Validators.required),
      courseName: new FormControl('', Validators.required)
    });

    this.getCourses();
  }

  /** 
   * method to enroll for course by user using his employer id
  */
  submitRegistration() {

    if (this.courseform.valid) {

      this.courseService.createCourseRegistration(this.courseform.value.courseName, this.courseform.value.employeeId).subscribe(
        data => {
          this.validMessage = "Your Course registration has been Submitted. Thank you!";
          this.courseform.reset();
          return true;
        },
        error => {
          this.validMessage = "Please fill out user id correctly";
          return Observable.throw(error);

        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }

  /** 
   * To list availbale courses from backend so that 
  */
  getCourses() {
    this.courseService.getCourses().subscribe(
      data => { this.courses = data },
      err => console.error(err),
      () => console.log('Courses Loaded')
    );
  }


}
