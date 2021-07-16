import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Ticket } from 'src/models/ticket.class';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  ticket: Ticket = new Ticket();
  endDate: Date;
  loading = false;
  constructor(public firestore: AngularFirestore, public dialogRef: MatDialogRef<AddTaskComponent>) { }

  Tickets = [];

  addNewTicket() {
    this.loading = true;

    this.ticket.endDate = this.endDate.getTime();
    this.ticket.endDate.toString();
   
    this.firestore
      .collection('tickets')
      .add(this.ticket.toJSON())
      .then((result: any) => {
      });
    setTimeout(() => {
      this.loading = false;
      this.dialogRef.close();
    }, 1000);

  }

  ngOnInit(): void {
  }

}
