import { Component, OnInit } from '@angular/core';
import { Users } from './models';
import { UsersService } from './users.service';
import { LoadingService } from '../../../../core/services/loading.service';
import { forkJoin } from 'rxjs';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})


export class UsersComponent {

  displayedColumns: string[] = ['id', 'name', 'lastname', 'email', 'course', 'actions'];
  dataSource: Users[] = [];
  course: string[] = [];

  constructor(private usersService: UsersService, private loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.getPageData();
  }

  getPageData(): void {
    this.loadingService.setIsloading(true)
    forkJoin([
      this.usersService.getCourse(),
      this.usersService.getUsers(),
    ]).subscribe({
      next: (value) => {
        this.course = value[0];
        this.dataSource = value[1]
      },
      complete: () => {
        this.loadingService.setIsloading(false);
      }
    })
  }

  onDeleteUsers(ev:Users):void{
    this.loadingService.setIsloading(true)
    this.usersService.deleteUser(ev.id).subscribe({
      next:(users)=>{
        this.dataSource = [...users];
      },
      complete:()=>{
        this.loadingService.setIsloading(false);
      }
    })
  }


  onUserSubmitted(ev: Users): void {
    this.loadingService.setIsloading(true);
    this.usersService.createUser({...ev,id:new Date().getTime()}).subscribe
    ({
      next:(users)=>{
        this.dataSource=[...users];
      },
      complete:()=>{
        this.loadingService.setIsloading(false)
      }
    })
  }
}
