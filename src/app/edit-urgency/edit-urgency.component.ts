import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-urgency',
  templateUrl: './edit-urgency.component.html',
  styleUrls: ['./edit-urgency.component.scss']
})
export class EditUrgencyComponent implements OnInit {

  ticket:any;

  constructor(public dialogRef: MatDialogRef<EditUrgencyComponent>, public firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveNewTicket() {
    this.firestore
    .collection('tickets')
    .doc(this.ticket.customIdName)
    .set(this.ticket)
    .then(() => {
      this.dialogRef.close();
    });
  }


}
