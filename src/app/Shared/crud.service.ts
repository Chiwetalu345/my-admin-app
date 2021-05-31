import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices:AngularFirestore) { }

  create_Newuser(Record:any)
  {
    return this.fireservices.collection('Users').doc(Record['id']).set(Record)
  }
}
