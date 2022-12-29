import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable } from 'rxjs';
import { studentResponseType } from 'src/app/domain/types/student-response.type';
import { studentType } from 'src/app/domain/types/student.type';
import { StudentsService } from 'src/app/shared/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit, OnDestroy{
  public student$!: Observable<studentType>;


  constructor(
    private activatedRoute: ActivatedRoute,
    private studentsService: StudentsService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({next: (params: Params) => {
      this.getStudentDetails(+params['id']);
    }})
  }

  ngOnDestroy(): void {
    console.log("Leaving");
    
  }

  getStudentDetails(id: number){
    this.student$ = this.studentsService.getStudentInfo(id).pipe(map((response: studentResponseType) => response.data));
  }
}
