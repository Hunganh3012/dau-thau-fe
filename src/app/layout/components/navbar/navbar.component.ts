import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navItems = [
    { label: 'Dashboard', link: '/dashboard', active: false, icon: 'icofont-home' },
    { label: 'Cơ hội đấu thầu', link: '/tender-opportunity', active: true, icon: 'icofont-briefcase-1' },
    { label: 'Hợp đồng thầu', link: '/contract', active: false, icon: 'icofont-papers' },
    { label: 'Giao hàng', link: '/delivery', active: false, icon: 'icofont-truck-alt' },
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
    { label: 'Cấu hình', link: '/settings', active: false, icon: 'icofont-settings' },
  ];
}

