import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
})
/**
 * component to view all the coursesby the admin
 */
export class ViewComponent implements OnInit {

    constructor(private courseService: CourseService, private route: ActivatedRoute) { }

    public courseReg;
    public employeeId: string = "";

    /**
     * to delete any course by admin 
     */
    public courseDelete;
    deleteform: FormGroup;
    validMessage: string = "";

    ngOnInit() {
        this.getCourseReg(this.route.snapshot.params.id);

        this.deleteform = new FormGroup({
            commentId: new FormControl('', Validators.required)
        });

        this.getCourseReg(this.route.snapshot.params.id);
    }
    /**
     * method to register for a course aby a particular user
     * @param id 
     */
    getCourseReg(id) {
        this.courseService.getCourse(id).subscribe(
            data => {
                this.courseReg = data;
                this.employeeId = id;
            },
            err => console.error(err),
            () => console.log('Courses Loaded')
        );
    }
    /** 
     * methid for deleting enrolment for particular user
     * parameteres passed are {Userid, courseId} to delete that paerticular course from use profile
    */
    deleteRegistration() {
        if (this.deleteform.valid) {
            this.validMessage = "Your Course registration has been Deleted. Thank you!";
            this.courseService.getCourseDelete(this.route.snapshot.params.id, this.deleteform.value.commentId).subscribe(
                data => {
                    this.deleteform.reset();
                    return this.getCourseReg(this.route.snapshot.params.id);
                },
                error => {
                    return Observable.throw(error);
                }
            )
        } else {
            this.validMessage = "Plaese fill correct course Id";
        }
    }

}