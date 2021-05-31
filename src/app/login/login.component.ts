import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import "firebase/firestore";
import { FirebaseService } from '../Shared/firebase.service';
import { CrudService } from '../Shared/crud.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSignedIn = false

  user_name!: string;
  user_email!: string;
  message!: string;
  user_password!: string;

  blocked = false;

  constructor(public firebaseService: FirebaseService, public crudservice: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else
      this.isSignedIn = false
  }
  async onSignup(email: string, password: string) {
    await this.firebaseService.signup(email, password)
    let Record: any = {};
    Record['id'] = firebase.default.firestore().collection("users").doc().id
    Record['email'] = this.user_email;
    Record['name'] = this.user_name;
    Record['blocked'] = this.blocked;
    Record['timestamp'] = firebase.default.firestore.FieldValue.serverTimestamp();
    Record['created_date'] = new Date().toDateString()

    this.crudservice.create_Newuser(Record).then(res => {
      this.user_name = '';
      this.user_email = '';
      this.user_password = '';
      this.blocked = false;
      console.log(res);
      this.message = 'User data save done'
    }).catch(error => {
      console.log(error);
    });
    if (this.firebaseService.isLoggedin)
      this.isSignedIn = true
    alert("Sign up is successful")
    this.router.navigateByUrl('d');
  }
  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password)
    if (this.firebaseService.isLoggedin) {
      this.isSignedIn = true
      this.router.navigateByUrl("/home")
    }
  }
  public handleLogout() {
    this.isSignedIn = false;

  }
}



