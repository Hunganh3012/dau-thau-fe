import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header.component';
import { LayoutService } from '../../../core/services/layout.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let layoutService: LayoutService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, NoopAnimationsModule],
      providers: [LayoutService],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    layoutService = TestBed.inject(LayoutService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call layoutService.toggleNavbar() when toggleNavbar is called', () => {
    spyOn(layoutService, 'toggleNavbar');
    component.toggleNavbar();
    expect(layoutService.toggleNavbar).toHaveBeenCalled();
  });

  it('should have a "Tạo gói thầu mới" button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.create-button')?.textContent).toContain(
      '+ Tạo gói thầu mới'
    );
  });

  it('should display the user name and role', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.user-name')?.textContent).toContain('Nguyễn Văn A');
    expect(compiled.querySelector('.user-role')?.textContent).toContain('Phòng Kinh doanh');
  });
});

