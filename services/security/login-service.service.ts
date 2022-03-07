import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  dataUser: any

  setDataUser(dataUser){
    this.dataUser = dataUser
  }
  getDataUser() {
    return this.dataUser
  }

  loggin() {
    if (this.dataUser) {
      return true
    }else{
      return false
    }
  }

}
