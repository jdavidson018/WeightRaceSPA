import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ProgressDashboardModule } from './progressDashboard/progressDashboard.module';
import { AuthService } from '../Services/auth.service';
import { ProgressDashResolver } from '../_resolvers/progressDash.resolver';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ProgressDashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  providers: [
    ProgressDashResolver,
    AuthService
  ],
})
export class PagesModule {
}
