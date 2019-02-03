import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Weight } from '../../../../_models/weight';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../Services/auth.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../../../../Services/alertify.service';
import { UserService } from '../../../../Services/user.service';

@Component({
  selector: 'ngx-addweightform',
  templateUrl: './addweightform.component.html',
  styleUrls: ['./addweightform.component.scss']
})
export class AddweightformComponent implements OnInit {
  @Output() addedWeight = new EventEmitter();
  @Input() userID: number;
  weight: Weight;
  addWeightForm: FormGroup;

  constructor(private userService: UserService, private router: Router,
    private alertify: AlertifyService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createAddWeightForm();
  }

  createAddWeightForm(){
    this.addWeightForm = this.fb.group({
      value: ['', Validators.required],
      date: [null, Validators.required],
    });
  }

  addWeight(){
    if(this.addWeightForm.valid){
      this.weight = Object.assign({}, this.addWeightForm.value);
      this.userService.addWeight(this.userID, this.weight).subscribe(() => {
      }, error => {
        this.alertify.error(error);
      }, () => {
        this.addedWeight.emit(this.weight);
      });
    }
  }

}
