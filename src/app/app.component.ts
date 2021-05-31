import { Component, OnInit } from '@angular/core';
import * as firebase from  "firebase/app"
import "firebase/auth"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-admin-app';

  ngOnInit() {
    
  }
}
