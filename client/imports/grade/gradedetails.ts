import { Component, NgZone } from '@angular/core';
import { RouteParams} from '@angular/router-deprecated';
import { Tracker } from 'meteor/tracker';
import { Courses } from '../../../collections/courses';

@Component({
	selector: 'gradedetails',
	templateUrl: './gradedetails.html'
})

export class GradeDetails {
	course: Object;

	constructor(params: RouteParams, ngZone: NgZone) {
		var courseID = params.get('courseID');

      	Tracker.autorun(() => {
          ngZone.run(() => {
          	this.course = Courses.findOne(courseID);
          });
        });
	}
}