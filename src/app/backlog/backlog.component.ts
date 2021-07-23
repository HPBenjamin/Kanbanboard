import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { EditTitleComponent } from '../edit-title/edit-title.component';
import { EditEndDateComponent } from '../edit-end-date/edit-end-date.component';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { EditUrgencyComponent } from '../edit-urgency/edit-urgency.component';




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

  convertMillToDate(mill) {
    var date = new Date(mill);
    return date.toLocaleDateString("de-DE", {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short"
    });
  }

  openDialogEditTitle(ticket:any) {
    const dialog = this.dialog.open(EditTitleComponent);
    dialog.componentInstance.ticket = ticket;
  }

  openDialogEditEndDate(ticket: any) {
    const dialog = this.dialog.open(EditEndDateComponent);
    dialog.componentInstance.ticket = ticket;
  }

  openDialogEditCategory(ticket:any) {
    const dialog = this.dialog.open(EditCategoryComponent);
    dialog.componentInstance.ticket = ticket;
  }

  openDialogEditUrgency(ticket:any) {
    const dialog = this.dialog.open(EditUrgencyComponent);
    dialog.componentInstance.ticket = ticket;
  }


}
