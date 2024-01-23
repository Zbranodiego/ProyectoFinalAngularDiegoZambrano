import { Component } from '@angular/core';

interface Users {
  id : Number;
  name: string;
  lastname:string ;
  email:string;
  course:string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})


export class UsersComponent {

  displayedColumns: string[] = ['id' , 'name', 'lastname','email','course'];
  dataSource: Users[] = [];


  onUserSubmitted(ev:Users):void{
    this.dataSource=[...this.dataSource, {...ev, id: new Date().getTime()}]
  }
}
