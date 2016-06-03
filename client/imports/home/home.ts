import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES,ROUTER_PROVIDERS, Routes} from '@angular/router';
import {MATERIAL_PROVIDERS, MATERIAL_DIRECTIVES} from 'ng2-material';

@Component({
  selector: 'home',
  templateUrl: '/client/imports/home/home.html',
  directives: [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES]
 
})

export class Home  {

}


