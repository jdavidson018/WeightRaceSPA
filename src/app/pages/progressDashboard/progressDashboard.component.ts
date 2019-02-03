import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../_models/user';
import { Weight } from '../../_models/weight';
import { UserService } from '../../Services/user.service';
import { AlertifyService } from '../../Services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { ProgressChartComponent } from './Charts/progress-chart.component';
import { WeightListComponent } from './Lists/weightList/weightList.component';

@Component({
  selector: 'ngx-progressDashboard',
  templateUrl: './progressDashboard.component.html'
})
export class ProgressDashboardComponent implements OnInit {
  @ViewChild(ProgressChartComponent) 
  ProgressChart: ProgressChartComponent;
  @ViewChild(WeightListComponent)
  WeightList: WeightListComponent;

  user: User;
  weights: Weight[];
  friends: User[];


  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }

  addedWeight(weight: Weight){
    this.userService.getWeights(this.user.id).subscribe((weights: Weight[]) => {
      this.user.weights = weights;
      this.ProgressChart.user = this.user;
      this.ProgressChart.users[0] = this.user;
    });
    this.ProgressChart.loadWeights();
    this.WeightList.loadWeights();
  }

  deletedWeight(weight: Weight){
    this.ProgressChart.loadWeights();
  }

  clickedFriend(event){
    if (event.display) {
      this.ProgressChart.addDataset(event);
    } else if (!event.display) {
      this.ProgressChart.removeDataset(event);
    }
  }

}
