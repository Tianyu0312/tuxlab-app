import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { Courses }   from '../../../collections/parties';
import { Mongo } from 'meteor/mongo';
import { GradeDetails } from './gradedetails.ts';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, RouterLink } from '@angular/router-deprecated'; 

@Component({
  selector: 'grade',
  templateUrl: '/client/imports/grade/grade.html',
  //directives: [ROUTER_DIRECTIVES]
})

// @RouteConfig([
// 	{ path: '/:courseID', component: GradeDetails}
// ])

export class Grade { 
  courses: Mongo.Cursor<Object>;
 
  constructor () {
    this.courses = Courses.find();
  }
}





