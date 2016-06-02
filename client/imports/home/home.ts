import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES,ROUTER_PROVIDERS, Routes} from '@angular/router';
import { Grade }   from '../grade/grade';
import { MdInput } from '@angular2-material/input';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdToolbar } from '@angular2-material/toolbar';
import {MATERIAL_PROVIDERS, MATERIAL_DIRECTIVES} from 'ng2-material';
import '../topbar.css';



@Component({
  selector: 'home',
  templateUrl: '/client/imports/home/home.html',
  directives: 
  [ROUTER_DIRECTIVES,MdInput,MdCheckbox,MdToolbar, MATERIAL_DIRECTIVES]
 
})

export class Home  {

}


