import { Component, OnInit } from '@angular/core';
import { Users } from './models';
import { UsersService } from './users.service';
import { LoadingService } from '../../../../core/services/loading.service';
import { forkJoin } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})


export class UsersComponent {

  displayedColumns: string[] = ['id', 'name', 'lastname', 'email', 'course', 'actions'];
  dataSource: Users[] = [];
  course: string[] = [];
  totalItems = 0;
  pageSize = 5;
  currentPage = 1;

  constructor(private usersService: UsersService, private loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.getPageData();
  }

  getPageData(): void {
    this.loadingService.setIsloading(true)
    forkJoin([
      this.usersService.getCourse(),
      this.usersService.paginate(this.currentPage)
    ]).subscribe({
      next: (value) => {
        this.course = value[0];
        const paginationResult = value[1];
        this.totalItems = paginationResult.items
        this.dataSource = paginationResult.data
      },
      complete: () => {
        this.loadingService.setIsloading(false);
      }
    })
  }

  onPage(ev: PageEvent) {
    this.currentPage = ev.pageIndex + 1;
    this.usersService.paginate(this.currentPage, ev.pageSize)
      .subscribe({
        next: (paginateResult) => {
          this.totalItems = paginateResult.items;
          this.dataSource = paginateResult.data;
          this.pageSize = ev.pageSize;
        }
      })
  }




  onDeleteUsers(ev: Users): void {
    this.loadingService.setIsloading(true)
    this.usersService.deleteUser(ev.id).subscribe({
      next: (users) => {
        this.dataSource = [...users];
      },
      complete: () => {
        this.loadingService.setIsloading(false);
      }
    })
  }


  onUserSubmitted(ev: Users): void {
    this.loadingService.setIsloading(true);
    this.usersService.createUser(ev).subscribe
      ({
        next: (users) => {
          this.dataSource = [...users];
        },
        complete: () => {
          this.loadingService.setIsloading(false)
        }
      })
  }
}
