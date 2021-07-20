import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { BacklogComponent } from './backlog/backlog.component';
import { BoardComponent } from './board/board.component';
import { EditTitleComponent } from './edit-title/edit-title.component';


const routes: Routes = [
  { path: '', component: BoardComponent },
  { path: 'backlog', component: BacklogComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'backlog/:id', component: EditTitleComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
