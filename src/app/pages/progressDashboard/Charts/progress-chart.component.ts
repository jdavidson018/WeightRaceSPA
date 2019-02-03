import { Component, OnInit, Input, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { LayoutService } from '../../../@core/data/layout.service';
import { Weight } from '../../../_models/weight';
import { User } from '../../../_models/user';
import { AlertifyService } from '../../../Services/alertify.service';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'ngx-progress-chart',
  styleUrls: ['./charts-common.component.scss'],
  template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
})
export class ProgressChartComponent implements OnDestroy, OnInit{


weights: Weight[];

//This array will contain all the users that need to be included in the graph.
//The graph will be reloaded every time that this array is changed
users: User[];
@Input()
user: User;

data: any;
options: any;
themeSubscription: any;

graphIDs: number[];

  constructor(private theme: NbThemeService, private userService: UserService, private alertify: AlertifyService ,private layoutService: LayoutService) {
  }
  
  ngOnInit() {
    this.users = [this.user];
    this.loadWeights();
  }

  loadWeights() {
    //subscribe to theme AND weights
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.userService.getWeights(this.user.id).subscribe((weights: Weight[])=>{
        const colors: any = config.variables;
        const chartjs: any = config.variables.chartjs;
        const coloroptions = [colors.primary, colors.danger, colors.info,
          colors.success, colors.warning, colors.primaryLight,
          colors.dangerLight, colors.infoLight, colors.successLight, 
          colors.warningLight];
        
        var colorIndex = 0;
        var userdata: any[] = [];
        var datasets: any[] = [];
        var dataset: any;

        this.user.weights = weights;
        this.users.forEach(user => {
          var currColor = coloroptions[colorIndex];
          colorIndex++;
          userdata = [];
          user.weights.forEach(w => {
            userdata.push({
              t: w.date,
              y: w.value
            });
          });

          dataset = {
            data: userdata,
            label: user.knownAs,
            backgroundColor: NbColorHelper.hexToRgbA(currColor, 0.3),
            borderColor: currColor,
            xAxesId: 'user-x-axis'
          };
          datasets.push(dataset);
        });

        this.setupLineChart(datasets, chartjs);
      });
    });
  }
  setupLineChart(datasets: any[], chartjs: any) {
      this.data = {datasets: []};
      this.setChartOptions(chartjs);
      this.data.datasets = datasets;
  }

  setChartOptions(chartjs: any) {
      //set up all of the options
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              id: 'user-x-axis',
              type: 'time',
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
              time: {
                unit: 'day'
              }
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
  }

  addDataset(user: User) {
    this.users.push(user);
    this.loadWeights();
  }

  removeDataset(user: User) {
    var index = this.users.findIndex(u => u.id === user.id);
    console.log(index);
    this.users.splice(index, 1);
    this.loadWeights();
  }

  ngOnDestroy(): void {
    if(this.themeSubscription != null){
      this.themeSubscription.unsubscribe();
    }
  }
}