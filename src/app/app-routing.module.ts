import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './home/add-student/add-student.component';
import { HomeComponent } from './home/home.component';
import { StudentDetailsComponent } from './home/students-list/student-details/student-details.component';
import { StudentsListComponent } from './home/students-list/students-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { 
        path: 'students', 
        component: StudentsListComponent,
        children: [
          {path: ':id', component: StudentDetailsComponent}
        ]
      },
      {
        path: 'add-student',
        component: AddStudentComponent
      }
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
