import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { STUDENTS_URL } from '../utils/constant.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {


  constructor(private http: HttpClient) { }

  getStudentListByPage(page: number) {
    return this.http.get(`${STUDENTS_URL}/?page=${page}`);
  }
}
