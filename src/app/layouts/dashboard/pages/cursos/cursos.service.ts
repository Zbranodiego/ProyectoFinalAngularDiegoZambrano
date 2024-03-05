import { Injectable } from '@angular/core';
import { Course } from './models/curso-interface';
import { LoadingService } from '../../../../core/services/loading.service';
import { delay, finalize, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

let courses:Course[]=[

  {
    id:1,
    name:'Front-end',
  },
  {
    id:2,
    name:'back-end',
  },
  {
    id:3,
    name:'fullStack',
  }
]

@Injectable()
export class CursosService {

  constructor(private loadingService:LoadingService,
    private httpClient:HttpClient){}

  getCuourse(){
    this.loadingService.setIsloading(true)
    return this.httpClient.get<Course[]>(
      `${environment.apiUrl}/courses`).
      pipe(finalize(()=>this.loadingService.setIsloading(false)))
    
  }

  createCourse(data:Course){
    courses=[...courses,{...data, id:courses.length+1}]
    return this.getCuourse()
  }

  deleteCourseById(id:number){
    courses= courses.filter((el)=>el.id !=id);
    return this.getCuourse();
  }

  updateCourseById(id:number,data:Course){
    courses = courses.map((el)=>el.id === id ? {...el,...data}:el);
    return this.getCuourse();
  }
}
