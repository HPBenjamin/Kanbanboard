import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Ticket } from 'src/models/ticket.class';
@Component({
  selector: 'app-edit-end-date',
  templateUrl: './edit-end-date.component.html',
  styleUrls: ['./edit-end-date.component.scss']
})
export class EditEndDateComponent implements OnInit {
  ticket: any;
  route: any;
  constructor(public dialogRef: MatDialogRef<EditEndDateComponent>, public firestore: AngularFirestore) { }

  endDate: Date;

  ngOnInit(): void {
  }

  saveNewTicket() {
    this.ticket.endDate = this.endDate.getTime();
    this.endDate.toLocaleDateString();
    this.firestore
    .collection('tickets')
    .doc(this.ticket.customIdName)
    .set(this.ticket)
    .then(() => {
      this.dialogRef.close();
    });
  }

}
