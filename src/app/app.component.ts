import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kanbanboard';

  constructor(public dialog: MatDialog) { }

  

  openDialog() {
    this.dialog.open(AddTaskComponent);
  }


}

