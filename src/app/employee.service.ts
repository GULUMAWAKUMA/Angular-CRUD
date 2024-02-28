import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from './UserData';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  baseURL = 'http://localhost:3000/employee';
  // constructor(private _http: HttpClient) { }
  getEmployeelist() {
    return this.http.get(this.baseURL);
  }
  addEmployee(data: any): Observable<any> {

    return this.http.post(this.baseURL, data);

  }
  updateEmployee(id: string, data: UserData): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, data);
  }
  deleteEmploye(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
