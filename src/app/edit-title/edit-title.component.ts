import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Ticket } from 'src/models/ticket.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-title',
  templateUrl: './edit-title.component.html',
  styleUrls: ['./edit-title.component.scss']
})
export class EditTitleComponent implements OnInit {

ticket: Ticket;
tickedId:string;

allTickets = [];

  constructor(private route:ActivatedRoute, public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
    .collection('tickets')
    .valueChanges()
    .subscribe((changes: any) => {
      console.log('Received changes from Firestore!!!!', changes);
      this.allTickets = changes;
    });
  }

  saveTicket() {
    
  }
  
}
