import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-title',
  templateUrl: './edit-title.component.html',
  styleUrls: ['./edit-title.component.scss']
})
export class EditTitleComponent implements OnInit {

  ticket: any;
  route: any;

  constructor(public dialogRef: MatDialogRef<EditTitleComponent>, public firestore: AngularFirestore) { }

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