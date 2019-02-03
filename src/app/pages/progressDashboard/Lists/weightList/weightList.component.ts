import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../_models/user';
import { UserService } from '../../../../Services/user.service';
import { AlertifyService } from '../../../../Services/alertify.service';
import { Weight } from '../../../../_models/weight';

@Component({
  selector: 'ngx-weightList',
  templateUrl: './weightList.component.html',
  styleUrls: ['./weightList.component.scss']
})
export class WeightListComponent implements OnInit {

  @Output()
  deletedWeight = new EventEmitter()
  @Input()
  user: User;
  weights: Weight[];

  constructor(private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadWeights();
  }

  loadWeights(){
    this.userService.getWeights(this.user.id).subscribe((weights: Weight[]) => {
      this.weights = weights;
    }, error => {
      this.alertify.error(error);
    });
  }

  deleteWeight(w: Weight){
    this.userService.deleteWeight(this.user.id, w.id).subscribe(() => {

    }, error => {
      this.alertify.error(error);
    }, () => {
      this.deletedWeight.emit(w);
      this.loadWeights();
    });
  }

}
