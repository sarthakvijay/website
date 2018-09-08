import { Component, OnInit } from '@angular/core';

import { CourseService } from '../../services/course.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
/**
 * this component is for home screen lisitng all the available courses
 */
export class AdminComponent implements OnInit {
    public courses;
    /**
     * filterBy is the default string for filter inbox to filter courses
     */
    public filterBy: string = "";
    public cond: number = 1;

    constructor(private courseService: CourseService) {
    }

    ngOnInit() {
        this.getCourses();
    }

    /** 
     * method to list course
    */
    getCourses() {
        this.courseService.getCourses().subscribe(
            data => { this.courses = data },
            err => console.error(err),
            () => console.log('Courses Loaded')
        );
    }

    /**
     * Filter the list of course content using filter 
     */

    performFilter(courseName: string) {
        this.filterBy = this.filterBy.toLowerCase();
        courseName = courseName.toLowerCase();
        this.cond = courseName.indexOf(this.filterBy);
        return this.cond;
    }


}