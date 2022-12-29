import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { studentType } from 'src/app/domain/types/student.type';
import { studentResponseListType } from 'src/app/domain/types/students-response-list.type';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  private currentPage = 1;

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.studentsService.getStudentListByPage(this.currentPage)
    .pipe(map((response: studentResponseListType) => response.data))
    .subscribe({
      next: (response: studentType[]) => {
        console.log(response);
      }
    })
  }

}
