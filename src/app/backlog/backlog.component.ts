import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {
  
  allTickets = [];

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


}
