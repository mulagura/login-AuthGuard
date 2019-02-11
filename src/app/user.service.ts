import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLogged;
  private username;

  constructor() {
      this.isUserLogged = false;
  }

setIsUserLogged(){
    this.isUserLogged = true;
}

getUserLoggedStatus(){
  return this.isUserLogged;
}

}
