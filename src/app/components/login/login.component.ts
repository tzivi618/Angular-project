import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamService } from '../../servises/team.service';
import { Router, RouterModule } from '@angular/router';
import { Role } from '../../types/team';

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
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public teamList: TeamService, private Router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit(): void { }
  onSubmit() {
    if (this.loginForm.valid) {
      const p: any = this.teamList.login(this.loginForm.value.email, this.loginForm.value.password);
      

      if (p) {
        console.log(p + "!!!!!!!!!!!!");
        if (p.role === Role.TEACHER) {
          this.Router.navigate(['/lessons', { teacherId: p.id }]);
        }
        if (p.role === Role.SECRETARY) {
          this.Router.navigate(['/participant']);
        }
      }
      else {
        alert('אימייל או סיסמא לא נכונים');
      }
    }
  }
}

