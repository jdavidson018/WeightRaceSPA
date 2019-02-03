import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressDashboardComponent } from './progressDashboard.component';
import { ThemeModule } from '../../@theme/theme.module';
import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ECommerceComponent } from '../e-commerce/e-commerce.component';
import { StatsCardFrontComponent } from '../e-commerce/profit-card/front-side/stats-card-front.component';
import { StatsAreaChartComponent } from '../e-commerce/profit-card/back-side/stats-area-chart.component';
import { StatsBarAnimationChartComponent } from '../e-commerce/profit-card/front-side/stats-bar-animation-chart.component';
import { ProfitCardComponent } from '../e-commerce/profit-card/profit-card.component';
import { ECommerceChartsPanelComponent } from '../e-commerce/charts-panel/charts-panel.component';
import { ChartPanelHeaderComponent } from '../e-commerce/charts-panel/chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from '../e-commerce/charts-panel/chart-panel-summary/chart-panel-summary.component';
import { OrdersChartComponent } from '../e-commerce/charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from '../e-commerce/charts-panel/charts/profit-chart.component';
import { StatsCardBackComponent } from '../e-commerce/profit-card/back-side/stats-card-back.component';
import { TrafficRevealCardComponent } from '../e-commerce/traffic-reveal-card/traffic-reveal-card.component';
import { TrafficBarChartComponent } from '../e-commerce/traffic-reveal-card/back-side/traffic-bar-chart.component';
import { TrafficFrontCardComponent } from '../e-commerce/traffic-reveal-card/front-side/traffic-front-card.component';
import { TrafficBackCardComponent } from '../e-commerce/traffic-reveal-card/back-side/traffic-back-card.component';
import { TrafficBarComponent } from '../e-commerce/traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import { TrafficCardsHeaderComponent } from '../e-commerce/traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import { CountryOrdersComponent } from '../e-commerce/country-orders/country-orders.component';
import { CountryOrdersMapComponent } from '../e-commerce/country-orders/map/country-orders-map.component';
import { CountryOrdersChartComponent } from '../e-commerce/country-orders/chart/country-orders-chart.component';
import { ECommerceVisitorsAnalyticsComponent } from '../e-commerce/visitors-analytics/visitors-analytics.component';
import { ECommerceVisitorsAnalyticsChartComponent } from '../e-commerce/visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import { ECommerceVisitorsStatisticsComponent } from '../e-commerce/visitors-analytics/visitors-statistics/visitors-statistics.component';
import { ECommerceLegendChartComponent } from '../e-commerce/legend-chart/legend-chart.component';
import { ECommerceUserActivityComponent } from '../e-commerce/user-activity/user-activity.component';
import { ECommerceProgressSectionComponent } from '../e-commerce/progress-section/progress-section.component';
import { SlideOutComponent } from '../e-commerce/slide-out/slide-out.component';
import { EarningCardComponent } from '../e-commerce/earning-card/earning-card.component';
import { EarningCardFrontComponent } from '../e-commerce/earning-card/front-side/earning-card-front.component';
import { EarningCardBackComponent } from '../e-commerce/earning-card/back-side/earning-card-back.component';
import { EarningPieChartComponent } from '../e-commerce/earning-card/back-side/earning-pie-chart.component';
import { EarningLiveUpdateChartComponent } from '../e-commerce/earning-card/front-side/earning-live-update-chart.component';
import { ChartsComponent } from '../charts/charts.component';
import { EchartsLineComponent } from '../charts/echarts/echarts-line.component';
import { ProgressChartComponent } from './Charts/progress-chart.component';
import { AddweightformComponent } from './InputForms/addweightform/addweightform.component';
import { FriendListComponent } from './Lists/friendList/friendList.component';
import { WeightListComponent } from './Lists/weightList/weightList.component';
import { AuthService } from '../../Services/auth.service';
import { ProgressDashResolver } from '../../_resolvers/progressDash.resolver';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
  ],
  declarations: [
    ProgressDashboardComponent,
    ProgressChartComponent,
    AddweightformComponent,
    FriendListComponent,
    WeightListComponent
  ],
  providers: [
  ],
})
export class ProgressDashboardModule { }
