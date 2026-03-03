import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly _navbarVisible = new BehaviorSubject<boolean>(true);
  readonly navbarVisible$ = this._navbarVisible.asObservable();

  toggleNavbar() {
    this._navbarVisible.next(!this._navbarVisible.value);
  }

  showNavbar() {
    this._navbarVisible.next(true);
  }

  hideNavbar() {
    this._navbarVisible.next(false);
  }
}
