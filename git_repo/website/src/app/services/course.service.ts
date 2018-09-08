import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CourseService {
    constructor(private http: HttpClient) { }

    /**
     * this is to list all the courses
     * no parameters passed
     */
    getCourses() {
        return this.http.get('/server/api/courses');
    }

    /** 
     * this is for admin to access all user who enrolled for courses
     * no parameters requires, just get api is called 
    */
    getCoursesAll() {
        return this.http.get('/server/posts/comments')
    }

    /**
     * to get the courses belonging to particular id
     * @param id 
     */
    getCourse(id) {
        let body = JSON.stringify(id);
        return this.http.get('/server/posts/' + id + '/comments');
    }

    /**
     * 
     * @param id to delete particular enrolled courses by particular user
     * @param commentId 
     */
    getCourseDelete(id, commentId) {
        return this.http.delete('/server/posts/' + id + '/comments/' + commentId);
    }

    /**
     * this is for enrolliing to new course
     * @param course 
     * @param empId 
     */
    createCourseRegistration(course, empId) {
        let body = JSON.stringify(course);
        return this.http.post('/server/posts/' + empId + '/comments', body, httpOptions);
    }

    /**
     * this is for adding new course to the list of courses present 
     * @param detail 
     */
    courseAddRegistration(detail) {
        let details = JSON.stringify(detail);
        return this.http.post('/server/api/courses', details, httpOptions);
    }

    /**
     * to delete a course from list of total courses 
     * @param id 
     */
    deleteCourse(id){
        return this.http.delete('/server/api/courses/' + id);
    }
}