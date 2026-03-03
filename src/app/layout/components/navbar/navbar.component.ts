import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

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
  private readonly expandedGroups = new Set<string>();

  constructor(private readonly router: Router) {}

  isLinkActive(link: string): boolean {
    const current = this.router.url.split('?')[0].split('#')[0];
    return current === link || current.startsWith(`${link}/`);
  }

  isParentActive(item: NavItem): boolean {
    return !!item.subItems?.some((subItem) => this.isLinkActive(subItem.link));
  }

  toggleGroup(label: string): void {
    if (this.expandedGroups.has(label)) {
      this.expandedGroups.delete(label);
      return;
    }
    this.expandedGroups.add(label);
  }

  isGroupExpanded(item: NavItem): boolean {
    return this.expandedGroups.has(item.label) || this.isParentActive(item);
  }
}
