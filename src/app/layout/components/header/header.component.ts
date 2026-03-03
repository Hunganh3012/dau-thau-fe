import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from "@core/services/layout.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private layoutService: LayoutService) {}

  toggleNavbar() {
    this.layoutService.toggleNavbar();
  }
}

