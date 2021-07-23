import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  ticket: any;

  constructor(public dialogRef: MatDialogRef<EditCategoryComponent>, public firestore: AngularFirestore) { }

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
