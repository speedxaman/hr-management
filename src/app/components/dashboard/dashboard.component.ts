import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('performanceChart', { static: false }) performanceChart!: ElementRef<HTMLCanvasElement>;

  recentActivities = [
    {
      user: 'Sarah Johnson',
      action: 'New employee Sarah Johnson added to Marketing department',
      time: '2 minutes ago'
    },
    {
      user: 'Mike Chen',
      action: 'Leave request approved for Mike Chen (5 days)',
      time: '1 hour ago'
    },
    {
      user: 'Emily Davis',
      action: 'Emily Davis updated her profile information',
      time: '3 hours ago'
    },
    {
      user: 'Admin',
      action: 'Monthly attendance report generated',
      time: '1 day ago'
    },
    {
      user: 'John Smith',
      action: 'John Smith completed training module',
      time: '2 days ago'
    }
  ];

  employees = [
    {
      name: 'Alice Johnson',
      role: 'Software Engineer',
      department: 'Engineering',
      status: 'Success'
    },
    {
      name: 'Bob Wilson',
      role: 'Product Manager',
      department: 'Product',
      status: 'Success'
    },
    {
      name: 'Carol Brown',
      role: 'UX Designer',
      department: 'Design',
      status: 'Warning'
    },
    {
      name: 'David Lee',
      role: 'Data Analyst',
      department: 'Analytics',
      status: 'Success'
    },
    {
      name: 'Eva Martinez',
      role: 'HR Specialist',
      department: 'Human Resources',
      status: 'Danger'
    }
  ];

  ngAfterViewInit() {
    this.initChart();
  }

  private initChart() {
    const canvas = this.performanceChart.nativeElement;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Simple bar chart implementation
      const data = [85, 92, 78, 96, 88, 91, 82, 89];
      const labels = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Design', 'Operations', 'Support'];
      const maxValue = Math.max(...data);
      
      canvas.width = 450;
      canvas.height = 300;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const barWidth = (canvas.width - 20)/ data.length - 10;
      const barMaxHeight = canvas.height - 40;
      
      data.forEach((value, index) => {
        const barHeight = (value / maxValue) * barMaxHeight;
        const x = index * (barWidth + 20) + 5;
        const y = canvas.height - barHeight - 20;
        
        // Draw bar
        ctx.fillStyle = '#4f46e5';
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Draw value on top
        ctx.fillStyle = '#374151';
        ctx.font = '12px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(value.toString() + '%', x + barWidth / 2, y - 5);
        
        // Draw label at bottom
        ctx.save();
        ctx.translate(x + barWidth / 2, canvas.height - 5);
        ctx.rotate(0);
        ctx.textAlign = 'center';
        ctx.font = '10px Inter';
        ctx.fillText(labels[index], 0, 0);
        ctx.restore();
      });
    }
  }
}