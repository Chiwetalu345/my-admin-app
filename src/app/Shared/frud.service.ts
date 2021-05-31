import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FrudService {

  constructor(public fireservices:AngularFirestore) { }
  
  create_Newdata(Record:any)
  {
    return this.fireservices.collection('Users').doc(Record['id']).set(Record)
  }
}
