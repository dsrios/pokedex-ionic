import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'My profile',
      url: '/folder/profile',
      icon: 'person'
    },
    {
      title: 'Pokedex',
      url: '/folder/pokedex',
      icon: 'search'
    }
  ];

  constructor(
    private menu: MenuController,
    private activatedRoute: ActivatedRoute,
    private authGuard: AuthGuardService,
    private  router: Router) {
    }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    this.folder = path;

  }

  logout() {
    this.authGuard.userLogged = null;
    this.router.navigateByUrl('/login');
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
