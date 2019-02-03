import { Component, Input, OnInit, Inject } from '@angular/core';

import { NbMenuService, NbSidebarService, NB_WINDOW } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { LayoutService } from '../../../@core/data/layout.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../../../Services/alertify.service';
import { AuthService } from '../../../Services/auth.service';
import { User } from '../../../_models/user';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: User;
  name: string;
  photoUrl: string;

  items = [
    { title: 'Logout' },
  ];;
 
  constructor(public authService: AuthService,
              @Inject(NB_WINDOW) private window,
              private alertify: AlertifyService,
              private router: Router,
              private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService) {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.photoUrl = this.user.photoUrl;
    if (!this.photoUrl) {
      this.photoUrl = '../../assets/user.png';
    } 
    this.menuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        if (title = 'Logout'){
          this.logout();
        }
      });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  hello() {
    this.alertify.success("clicked it");
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('logged out');
    this.router.navigate(['/auth/login']);
  }
}
