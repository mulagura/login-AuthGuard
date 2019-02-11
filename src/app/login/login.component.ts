import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
  }

  loginUser(e){

    //console.log("inside loginUser");

    e.preventDefault(e);

    //console.log(e);

    var userName = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    //console.log(userName,password);

    //return false;

    if(userName == 'admin' && password == 'admin') {

      this.userService.setIsUserLogged();

      this.router.navigate(['wall']);
      
    }

  }

}
