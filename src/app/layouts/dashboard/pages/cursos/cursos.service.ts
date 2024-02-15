import { Injectable } from '@angular/core';
import { Course } from './models/curso-interface';
import { LoadingService } from '../../../../core/services/loading.service';
import { delay, finalize, of } from 'rxjs';

let courses:Course[]=[]

@Injectable()
export class CursosService {

  constructor(private loadingService:LoadingService){}

  getCuourse(){
    this.loadingService.setIsloading(true)
    return of (courses).pipe(delay(1500),finalize(()=>this.loadingService.setIsloading(false)))
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
