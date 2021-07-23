import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Ticket } from 'src/models/ticket.class';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  ticket = new Ticket();
  allTickets = [];
  textDate = [];

  constructor(public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection('tickets')
      .valueChanges()
      .subscribe((changes: any) => {
        console.log('Received changes from Firestore!!!!', changes);
        this.allTickets = changes;
      });
  }

  convertMillToDate(mill) {
    var date = new Date(mill);
    return date.toLocaleDateString("de-DE", {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short"
    });
  }

  deleteTicket(ticket:string) {
    this.firestore
      .collection('tickets')
      .doc(ticket)
      .delete()
  }
}



