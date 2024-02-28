import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserData } from '../UserData';


@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrl: './emp-add-edit.component.css'
})
export class EmpAddEditComponent implements OnInit {

  empForm: FormGroup;
  education: string[] = [
    'Matric',
    'Diploma',
    'Bachelors',
    'Masters',
    'Doctorate'
  ];

  constructor(private _fb: FormBuilder, private _dialogRef: DialogRef<EmpAddEditComponent>, private _employeeService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data: UserData
  ) {
    this.empForm = this._fb.group({
      // id: this._fb.control(''),
      firstName: this._fb.control(''),
      lastName: this._fb.control(''),
      email: this._fb.control(''),
      dob: this._fb.control(''),
      gender: this._fb.control(''),
      education: this._fb.control(''),
      company: this._fb.control(''),
      experience: this._fb.control(''),
      package: this._fb.control(''),
    });
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
  onFormSubmit() {
    if (this.data) {
      this._employeeService.updateEmployee(this.data.id, this.empForm.value).subscribe({
        next: (val: any) => {
          alert('employee added successfully');
          this._dialogRef.close();
          window.location.reload();

        },
        error: (err: any) => {
          console.log(err);
        },
      },
      )
    } else {
      this._employeeService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('employee added successfully');
          this._dialogRef.close();
          window.location.reload();

        },
        error: (err: any) => {
          console.log(err);
        },
      },
      )
    }




  }
}
