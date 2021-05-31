import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import "firebase/firestore"
import "firebase/auth"
import { FirebaseService } from '../Shared/firebase.service';
import { FrudService } from '../Shared/frud.service';
import { CrudService } from '../Shared/crud.service'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  school_name!: string;
  user_email!: string;
  message!: string;
  user_password!: string;
  student_number!: string;
  date_established!: string;
  state!: string;
  city!: string;
  address!: string;
  postal_code!: string;
  telephone_number!: string;

  // const a = new LoginComponent();
  // a.handleLogout();


  constructor(public firebaseService: FirebaseService, public crudservice: CrudService, private router: Router, private route: ActivatedRoute, public frudservice: FrudService) { }


  ngOnInit(): void {
    firebase.default.auth().onAuthStateChanged(user => {
      if (user == null) {
        //go to login page
        location.href = "/login"
      }
    })
  }
  CreateRecord() {
    let Record: any = {};
    // Record['id'] = firebase.default.firestore().collection("users").doc().id
    Record['student_number'] = this.student_number;
    Record['school'] = this.school_name;
    Record['date_establishedl'] = this.date_established;
    Record['state'] = this.state;
    Record['city'] = this.city;
    Record['address'] = this.address;
    Record['postal_code'] = this.postal_code;
    Record['telephone_number'] = this.telephone_number;
    // Record['school'] = this.school_name;
    // Record['timestamp'] = firebase.default.firestore.FieldValue.serverTimestamp();
    // Record['created_date'] = new Date().toDateString()

    this.crudservice.create_Newuser(Record).then(res => {
      this.school_name = '';
      this.student_number = '';
      this.date_established = '';
      this.state = ''
      this.city = '';
      this.address = '';
      this.postal_code = '';
      this.telephone_number = '';
      console.log(res);
      this.message = 'User data save done'
    }).catch(error => {
      console.log(error);
    });

  }
  logout() {
    this.firebaseService.logout()
  }
}
