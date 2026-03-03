import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutService } from '@core/services/layout.service';
import { ContentComponent } from './components/content/content.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [AsyncPipe, NgIf, HeaderComponent, NavbarComponent, ContentComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  constructor(public layoutService: LayoutService) {
  }
}

