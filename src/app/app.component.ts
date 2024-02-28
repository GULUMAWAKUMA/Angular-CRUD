import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './employee.service';

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserData } from './UserData';
import { CheckDeleteEmployeeComponent } from './check-delete-employee/check-delete-employee.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // applyFilter($event: KeyboardEvent) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experience',
    'package',
    'action'

  ];
  dataSource!: MatTableDataSource<UserData>;
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  userList: any;
  constructor(private _dialog: MatDialog, private _empService: EmployeeService) {
    this._empService.getEmployeelist().subscribe(res => {
      this.userList = res;
      this.dataSource = new MatTableDataSource(this.userList);
      // this.dataSource = new MatTableDataSource(res);



    })
  }
  openAddEditEmopForm() {
    this._dialog.open(EmpAddEditComponent);
  }


  // ngOnInit(): void {
  //   this.getEmployeelist();
  // }
  // getEmployeelist() {

  // }


  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }



  // ngAfterViewInit() {
  //   if (this.paginator) {
  //     this.dataSource.paginator = this.paginator;
  //   }
  //   if (this.sort) {
  //     this.dataSource.sort = this.sort;
  //   }
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

  // deleteEmploye(id: string) {
  //   this._empService.deleteEmploye(id).subscribe(
  //     {
  //       next: res => {
  //         alert("Employe deleted");

  //         window.location.reload();
  //       },
  //       error: err => {
  //         console.log(err);
  //       }
  //     }
  //   );
  // }
  openEditEmployee(data: UserData) {
    this._dialog.open(EmpAddEditComponent, {
      data,
    });
  }
  deleteEmployeCh(data: UserData) {
    this._dialog.open(CheckDeleteEmployeeComponent, {
      data,
    });
  }

}