import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { studentResponseListType } from '../domain/types/students-response-list.type';
import { STUDENTS_URL } from '../utils/constant.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {


  constructor(private http: HttpClient) { }

  getStudentListByPage(page: number): Observable<studentResponseListType> {
    return this.http.get<studentResponseListType>(`${STUDENTS_URL}/?page=${page}`);
  }
}
