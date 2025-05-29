import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee, Department, Activity } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getEmployees(): Observable<Employee[]> {
    const employees: Employee[] = [
      {
        id: 1,
        name: 'Alice Johnson',
        email: 'alice@company.com',
        role: 'Software Engineer',
        department: 'Engineering',
        status: 'Active',
        joinDate: new Date('2023-01-15')
      },
      {
        id: 2,
        name: 'Bob Wilson',
        email: 'bob@company.com',
        role: 'Product Manager',
        department: 'Product',
        status: 'Active',
        joinDate: new Date('2022-08-20')
      },
      {
        id: 3,
        name: 'Carol Brown',
        email: 'carol@company.com',
        role: 'UX Designer',
        department: 'Design',
        status: 'On Leave',
        joinDate: new Date('2023-03-10')
      }
    ];
    
    return of(employees);
  }

  getDepartments(): Observable<Department[]> {
    const departments: Department[] = [
      { id: 1, name: 'Engineering', employeeCount: 45, manager: 'John Doe' },
      { id: 2, name: 'Marketing', employeeCount: 23, manager: 'Jane Smith' },
      { id: 3, name: 'Sales', employeeCount: 31, manager: 'Mike Johnson' },
      { id: 4, name: 'Human Resources', employeeCount: 8, manager: 'Sarah Wilson' }
    ];
    
    return of(departments);
  }

  getRecentActivities(): Observable<Activity[]> {
    const activities: Activity[] = [
      {
        id: 1,
        user: 'Sarah Johnson',
        action: 'New employee added to Marketing department',
        timestamp: new Date(),
        type: 'user_added'
      },
      {
        id: 2,
        user: 'Mike Chen',
        action: 'Leave request approved (5 days)',
        timestamp: new Date(Date.now() - 3600000),
        type: 'leave_approved'
      }
    ];
    
    return of(activities);
  }

  getDashboardStats() {
    return {
      totalEmployees: 248,
      activeLeaves: 23,
      departments: 8,
      attendanceRate: 94.5
    };
  }
}