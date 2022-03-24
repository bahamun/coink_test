import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private navController: NavController) {}

  public goBack() {
    this.navController.back();
  }

  public async goTo(url: string) {
    this.navController.navigateForward(url);
  }
}
