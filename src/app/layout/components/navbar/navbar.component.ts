import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavSubItem {
  label: string;
  link: string;
}

interface NavItem {
  label: string;
  icon: string;
  link?: string;
  subItems?: NavSubItem[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navItems: NavItem[] = [
    { label: 'Dashboard', link: '/dashboard', icon: 'icofont-home' },
    {
      label: 'Cơ hội đấu thầu',
      link: '/tender-opportunity',
      icon: 'icofont-briefcase-1',
    },
    { label: 'Hợp đồng thầu', link: '/contract', icon: 'icofont-papers' },
    { label: 'Giao hàng', link: '/delivery', icon: 'icofont-truck-alt' },
    {
      label: 'Công nợ',
      icon: 'icofont-bill-alt',
      subItems: [
        { label: 'Chủ đầu tư', link: '/debt/investor' },
        { label: 'Nhà cung cấp', link: '/debt/supplier' },
      ],
    },
    {
      label: 'Lưu trữ',
      icon: 'icofont-archive',
      subItems: [
        { label: 'Pháp nhân', link: '/archive/legal-entity' },
        { label: 'Nhà cung cấp', link: '/archive/supplier' },
        { label: 'Chủ đầu tư', link: '/archive/investor' },
        { label: 'Sản phẩm', link: '/archive/product' },
      ],
    },
    { label: 'Cấu hình', link: '/settings', icon: 'icofont-settings' },
  ];
}
