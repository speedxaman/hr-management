export interface Employee {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: 'Active' | 'Inactive' | 'On Leave';
  joinDate: Date;
  avatar?: string;
}

export interface Department {
  id: number;
  name: string;
  employeeCount: number;
  manager: string;
}

export interface Activity {
  id: number;
  user: string;
  action: string;
  timestamp: Date;
  type: 'user_added' | 'leave_approved' | 'profile_updated' | 'report_generated';
}