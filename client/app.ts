import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component, provide } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, RouterLink } from '@angular/router-deprecated'; 
import { APP_BASE_HREF } from '@angular/common';
import { Account } from './imports/account/account.ts';
import { Assignment } from './imports/assignment/assignment.ts';
import { Grade } from './imports/grade/grade.ts';
import { Login } from './imports/login/login.ts';
import { Home } from './imports/home/home.ts';
import { CoursePage } from './imports/coursepage/coursepage.ts';
import {MATERIAL_PROVIDERS, MATERIAL_DIRECTIVES} from 'ng2-material';
import {MdToolbar} from '@angular2-material/toolbar';
import '../node_modules/@angular2-material/button/button.css';
import '../node_modules/@angular2-material/toolbar/toolbar.css';

 @Component({
   selector: 'app',
   templateUrl: 'client/app.html',
   directives: [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES, MdToolbar]
 })

 // @Component({
 //   selector: 'app',
 //   templateUrl: 'client/app.html',
 //   directives: [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES, MdToolbar]
 // })

@RouteConfig([
  { path: '/login', component: Login},
  { path: '/account', component: Account},
  { path: '/assignment', component: Assignment},
  { path: '/grade', component: Grade},
  { path: '/home', component: Home},
  { path: '/coursepage', component: CoursePage}
  //{ path: '/menu', component: Menu}
])
class project {
	courseUrl: string = '/coursepage';
	labUrl: string = '/lab';
	gradeUrl: string = '/grade';
}
 
bootstrap(project , [MATERIAL_PROVIDERS, ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
