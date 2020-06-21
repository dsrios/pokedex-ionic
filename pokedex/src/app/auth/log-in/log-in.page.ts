import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  constructor(private router: Router,
              private authService: AuthService,
              public toastController: ToastController) { }

  ngOnInit() {}

  signUp() {
    this.router.navigateByUrl('/sign-up');
  }

  login(form) {
    console.log('values', form.value);
    this.authService.login(form.value.email, form.value.password).subscribe( res => {
      if ( res ) {
        this.router.navigateByUrl('/folder/Pokedex');
      } else {
        this.presentToast('Login no valid');
      }
    });
  }

  async presentToast(msgInformation: string) {
    const toast = await this.toastController.create({
      message: msgInformation,
      duration: 2000
    });
    toast.present();
  }

}
