import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private  authService: AuthService, private  router: Router) { }

  ngOnInit() {
  }

  register(form) {
    this.authService.register(form.value).subscribe((res) => {
      // this.router.navigateByUrl('/folder/Pokedex');
      this.router.navigateByUrl('/login');
    });
  }

  cancel() {
    this.router.navigateByUrl('/login');
  }

}
