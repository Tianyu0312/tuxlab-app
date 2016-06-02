import { Component, Input } from '@angular/core';
import { NgForm }    from '@angular/common';
 
@Component({
  selector: 'login',
  templateUrl: '/client/imports/login/login.html'
})

export class Login { 

	clickedForget(){
		forgetPassword();
	};
	
	clickedSignUp(){
		signUp();
	};
}

function forgetPassword(){
	alert("you forget password");
}

function signUp(){
	alert("you want to sign up");
}





