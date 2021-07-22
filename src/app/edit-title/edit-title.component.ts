import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Ticket } from 'src/models/ticket.class';

@Component({
  selector: 'app-edit-title',
  templateUrl: './edit-title.component.html',
  styleUrls: ['./edit-title.component.scss']
})
export class EditTitleComponent implements OnInit {

  ticket: Ticket = new Ticket();
  ticketId: string;

  allTickets = [];
  route: any;

  constructor(public dialogRef: MatDialogRef<EditTitleComponent>, public firestore: AngularFirestore) { }

  ngOnInit(): void {
   

  }

  saveNewTicket() {
    this.firestore
    .collection('tickets')
    .doc(this.ticketId)
    .update(this.ticket.toJSON())
    .then(() => {
      this.dialogRef.close();
    });

  }
}