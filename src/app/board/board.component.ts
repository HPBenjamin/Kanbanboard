import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  ticket:any;
  allTickets = [];
  textDate = [];
  todos: any = this.getTodos();
  inProgresses: any = this.getInProgresses();
  testings: any = this.getTestings();
  dones: any = this.getDones();


  constructor(public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection('tickets')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        console.log('Received changes from Firestore!!!!', changes);
        this.allTickets = changes;
        console.log('allTickets ====', this.allTickets);
        this.updateHTML();
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  getTodos() {
    this.todos = this.allTickets.filter(t => t['status'] == 'todo');
    console.log('todos =====', this.todos);
  }

  getInProgresses() {
    this.inProgresses = this.allTickets.filter(t => t['status'] == 'inProgress');
    console.log('inProgresses ========', this.inProgresses);
  }

  getTestings() {
    this.testings = this.allTickets.filter(t => t['status'] == 'testing');
    console.log('testings =====', this.testings);
  }

  getDones() {
    this.dones = this.allTickets.filter(t => t['status'] == 'done');
    console.log('dones =====', this.dones);
  }


  updateHTML() {
    for (let i = 0; i < this.allTickets.length; i++) {
      const element = this.allTickets[i];
      if (element['status'] == '') {
        this.allTickets[i]['status'] = 'todo';
      } 
    }
    this.getTodos();
    this.getInProgresses();
    this.getTestings();
    this.getDones();
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

  deleteTicket(ticketId: string) {
    console.log('TicketId:::::', ticketId);
    this.firestore
      .collection('tickets')
      .doc(ticketId)
      .delete()
      .then(response => { console.log(response) })
      .catch(error => console.error(error));
  }

  
}



