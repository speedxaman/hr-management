import { Component, Input, Output, EventEmitter, HostListener, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() isCollapsed = false;
  @Input() isMobile = false;
  @Output() sidebarToggle = new EventEmitter<boolean>();

  ngOnInit() {
    // Initialize based on screen size
    if (this.isMobile && !this.isCollapsed) {
      this.isCollapsed = true;
      this.sidebarToggle.emit(this.isCollapsed);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // Handle external changes to mobile state
    if (changes['isMobile'] && !changes['isMobile'].firstChange) {
      if (this.isMobile && !this.isCollapsed) {
        this.closeSidebar();
      }
    }
  }

  closeSidebar() {
    if (!this.isCollapsed) {
      this.isCollapsed = true;
      this.sidebarToggle.emit(this.isCollapsed);
    }
  }

  // Handle clicks on nav items for mobile
  onNavItemClick() {
    if (this.isMobile) {
      this.closeSidebar();
    }
  }
}