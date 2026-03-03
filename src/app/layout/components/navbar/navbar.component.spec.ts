import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct number of main navigation items', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const navItems = compiled.querySelectorAll('.navbar > ul > li');
    expect(navItems.length).toBe(component.navItems.length);
  });

  it('should display "Cơ hội đấu thầu" as an active item', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const activeItem = compiled.querySelector('.navbar > ul > li.active');
    expect(activeItem?.textContent).toContain('Cơ hội đấu thầu');
  });

  it('should render sub-items for "Công nợ"', () => {
    const congNoItem = component.navItems.find(item => item.label === 'Công nợ');
    expect(congNoItem).toBeTruthy();
    expect(congNoItem?.subItems?.length).toBe(2);
  });
});

