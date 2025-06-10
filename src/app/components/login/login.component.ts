import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamService } from '../../servises/team.service';
import { Router, RouterModule } from '@angular/router';


import { Role } from '../../types/role';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {

  loginForm: FormGroup;


  constructor(private formBuilder: FormBuilder, public teamList: TeamService, public router: Router) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit(): void { }

  onSubmitLogin() {
    if (this.loginForm.invalid) {
      alert('יש למלא את כל השדות בצורה תקינה');
      return;
    }
    let team: any = this.teamList.login(this.loginForm.value.email, this.loginForm.value.password);
    if (team) {
      alert('ברוך הבא ' + team.firstName + ' ' + team.lastName);
      if (team.role == Role.TEACHER) {
        sessionStorage.setItem('isTeacherMayEnter', 'true');
        this.router.navigate(['/lessons']);
      }
      else if (team.role == Role.SECRETARY) {
        sessionStorage.setItem('isSecretaryMayEnter', 'true');
        this.router.navigate(['/participant']);
      }
      else {
        alert('אימייל או סיסמא לא נכונים');
      }
    }
    else{
      alert("שגיאה");
    }
  }
}

