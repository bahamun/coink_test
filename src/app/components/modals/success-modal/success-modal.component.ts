import { GlobalService } from 'src/app/services/global.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss'],
})
export class SuccessModalComponent {
  @Input() public message: string;
  constructor(
    public modalController: ModalController,
    private globalService: GlobalService
  ) {}

  public reSendVerificationNumber(result: boolean) {
    console.log(this.globalService.logData);
    // this.modalController.dismiss(result);
  }
}
