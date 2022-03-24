import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss'],
})
export class ErrorModalComponent {
  @Input() public message: string;
  constructor(public modalController: ModalController) {}

  public reSendVerificationNumber(result: boolean) {
    this.modalController.dismiss(result);
  }
}
