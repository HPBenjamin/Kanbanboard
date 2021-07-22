import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { EditTitleComponent } from '../edit-title/edit-title.component';
import { Ticket } from 'src/models/ticket.class';




@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {
  idField = '';
  allTickets = [];
  ticketId = '';
  ticket: Ticket = new Ticket();

  constructor(public firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.firestore
      .collection('tickets')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        console.log('Backlog-changes!!!!', changes);
        this.allTickets = changes;
      });

  }

  openDialogEditTitle() {
    const dialog = this.dialog.open(EditTitleComponent);
    dialog.componentInstance.ticket = new Ticket(this.ticket.toJSON());
    dialog.componentInstance.ticketId = this.ticketId;
  }

}

