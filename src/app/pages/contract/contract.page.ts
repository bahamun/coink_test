import { SuccessModalComponent } from './../../components/modals/success-modal/success-modal.component';
import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';
import { contractConfig } from './contract.config';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.page.html',
  styleUrls: ['./contract.page.scss'],
})
export class ContractPage implements OnInit {
  public config = contractConfig;

  public aceptTerms = false;

  constructor(private globalService: GlobalService) {}

  ngOnInit() {}

  public async endRegister() {
    const modalResult = await this.globalService.modalGlobal(
      SuccessModalComponent,
      { message: this.config.successMsg },
      false,
      'success-modal-alert'
    );

    if (modalResult) {
      // console.log(this.globalService.logData);
      return;
    }
  }
}
