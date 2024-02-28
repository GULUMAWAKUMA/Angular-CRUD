import { Component, Inject } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { UserData } from '../UserData';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-check-delete-employee',
  templateUrl: './check-delete-employee.component.html',
  styleUrl: './check-delete-employee.component.css'
})
export class CheckDeleteEmployeeComponent {
  constructor(private _empService: EmployeeService, @Inject(MAT_DIALOG_DATA) private data: UserData) { }
  deleteEmployel() {
    this.deleteEmploye(this.data.id);
  }
  deleteEmploye(id: string) {
    this._empService.deleteEmploye(id).subscribe(
      {
        next: res => {
          // alert("Employe deleted");

          window.location.reload();
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
