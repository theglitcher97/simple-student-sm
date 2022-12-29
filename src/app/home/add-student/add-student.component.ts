import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  public newStudentForm!: FormGroup;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.newStudentForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      avatar: new FormControl('', []),
    });
  }

  onSubmit() {
    console.log(this.newStudentForm.value);
    this.newStudentForm.reset();
    this.snackBar.open("Student added successfully", "CLOSE")
  }
}
