import { Component } from '@angular/core';
import '../topbar.css';
 
@Component({
  selector: 'coursepage',
  templateUrl: '/client/imports/coursepage/coursepage.html'
})

export class CoursePage { 
  title = "My courses";
  items = fetchCourses("a");

}

/* fetchCourses: takes in useid and fetch the list of courses from database
 */
function fetchCourses(user){

    // TODO : replace courses with actual tasks fetched from database

    var courses:string [] = 
    	["15-131: Great Practical Ideas in CS",
       "15-150: Functional Programming",
       "15-210: Parallel and Sequential Data Structures and Algorithms"];

   return courses;
}