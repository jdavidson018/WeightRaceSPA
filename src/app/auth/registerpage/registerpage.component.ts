import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../../Services/alertify.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../_models/user';

@Component({
  selector: 'ngx-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterpageComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  user: User;
  registerForm: FormGroup;
  constructor(private authService: AuthService, private router: Router, private alertifyService: AlertifyService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      gender: ['male'],
      username: ['', Validators.required],
      knownAs:['', Validators.required],
      startWeight:['', Validators.required],
      goalWeight:['', Validators.required],
      dateOfBirth:[null, Validators.required],
      city:['', Validators.required],
      country:['', Validators.required],
      password:['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      confirmPassword:['', Validators.required]
    }, {validator: this.passwordMatchValidator});
  }

  passwordMatchValidator(g: FormGroup){
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch': true};
  }

  register() {
    if(this.registerForm.valid){
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe(() => {
        this.alertifyService.success('New user created successfully');
      }, error => {
        this.alertifyService.error(error);
      }, () => {
        this.authService.login(this.user).subscribe(() => {
          this.router.navigate(['/pages']);
        });
      });
    }
  }

  cancel() {
    this.router.navigate(['/auth/'])
  }


}
