import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-all',
    templateUrl: './all.component.html',
    styleUrls: ['./all.component.css']
})

export class AllComponent implements OnInit {

    constructor(private courseService: CourseService, private route: ActivatedRoute) { }
    /**
     * To variables to show all courses and store the course to be deleted
     */
    public courseAll;


    ngOnInit() {
        this.getCourseAll();

    }
    /** 
     * to get all the registered courses
     * no parameters passed
    */
    getCourseAll() {
        this.courseService.getCoursesAll().subscribe(
            data => {
                this.courseAll = data;
            },
            err => console.error(err),
            () => console.log('Courses Loaded')
        );
    }

}