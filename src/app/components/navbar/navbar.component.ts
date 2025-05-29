import { Component, EventEmitter, Output, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() isMobile = false;
  @Output() toggleSidebar = new EventEmitter<void>();
  
  showUserDropdown = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Close dropdown if clicking outside
    if (!((event.target as Element).closest('.user-menu'))) {
      this.showUserDropdown = false;
    }
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  toggleUserDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.showUserDropdown = !this.showUserDropdown;
  }
}