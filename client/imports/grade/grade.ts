//import 'reflect-metadata';
//import 'zone.js/dist/zone';
import { Component } from '@angular/core';
//import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { Courses }   from '../../../collections/courses';
import { Mongo } from 'meteor/mongo';
import { GradeDetails } from './gradedetails.ts';
//import { CoursePage } from '../../coursepage/coursepage.ts';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, RouterLink } from '@angular/router-deprecated'; 

@Component({
  selector: 'grade',
  templateUrl: '/client/imports/grade/grade.html',
	directives: [RouterLink]
})

export class Grade {
  courses: Mongo.Cursor<Object>;
 
  constructor () {
    this.courses = Courses.find();
  }
}





