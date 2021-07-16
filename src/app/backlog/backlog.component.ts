import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';




@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {
  
  allTickets = [];

  constructor(public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection('tickets')
      .valueChanges()
      .subscribe((changes: any) => {
        console.log('Backlog-changes!!!!', changes);
        this.allTickets = changes;
      });

  }

}
