import { Component } from '@angular/core';
import {MATERIAL_PROVIDERS, MATERIAL_DIRECTIVES} from 'ng2-material';
import {MdToolbar} from '@angular2-material/toolbar';
import '../node_modules/@angular2-material/button/button.css';
import '../node_modules/@angular2-material/toolbar/toolbar.css';

 @Component({
   selector: 'menu',
   templateUrl: 'client/imports/menubar/menu.html',
   directives: [MATERIAL_DIRECTIVES, MdToolbar]
 })

 export class Menu { }
