import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../_models/user';
import { UserService } from '../../../../Services/user.service';
import { AlertifyService } from '../../../../Services/alertify.service';

@Component({
  selector: 'ngx-friendList',
  templateUrl: './friendList.component.html',
  styleUrls: ['./friendList.component.scss']
})
export class FriendListComponent implements OnInit {
  @Output() 
  clickedFriend = new EventEmitter();

  @Input()
  user: User;

  friends: User[];
  id;
  constructor(private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.userService.getFriends(this.user.id).subscribe((friends: User[]) => {
      this.friends = friends;
    }, error => {
      this.alertify.error(error);
    });
  }

  checkStatus(friend: User){
    if (friend.display == null) {
      friend.display = true;
    }
    this.clickedFriend.emit(friend);
    friend.display = !friend.display;
  }

}
