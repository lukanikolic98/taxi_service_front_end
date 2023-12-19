import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { confirmPasswordValidator } from './confirm-password.validator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'confirm-component',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log('Confirming registration with key: ', params['regKey']);
      this.authService.confirmAccount(params['regKey']).subscribe((e) => {
        console.log('Proslo');
        this.router.navigate(['/login'], undefined);
      });
    });
  }

  OnSubmit(event: Event) {
    event.preventDefault();
    this.route.queryParams.subscribe((params) => {
      console.log('Confirming registration with key: ', params['regKey']);
      this.authService.confirmAccount(params['regKey']).subscribe((e) => {
        console.log('Proslo');
      });
    });
  }
}
