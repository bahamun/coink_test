import { ErrorModalComponent } from './../../components/modals/error-modal/error-modal.component';
import { environment } from 'src/environments/environment';
import { ServicesParams } from './../../constants/services.params';
import { HttpService } from './../../services/http.service';
import { EncryptService } from './../../services/encrypt.service';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { mobilNumberConfig } from './mobil-number.config';

@Component({
  selector: 'app-mobil-number',
  templateUrl: './mobil-number.page.html',
  styleUrls: ['./mobil-number.page.scss'],
})
export class MobilNumberPage implements OnInit {
  public config = mobilNumberConfig;

  public mobilNumber: string;
  public verificationNumber: string;
  public numberFormated: string;
  public showVerificationNumber: boolean;

  public panelNumbers: number[];

  private env = environment;

  constructor(
    private globalService: GlobalService,
    private encryptService: EncryptService,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.clearData();
  }

  public clearData() {
    this.panelNumbers = this.config.panelMobilNumbers;
    this.mobilNumber = '';
    this.verificationNumber = '';
    this.numberFormated = '';
    this.showVerificationNumber = false;
  }

  public updateMobilNumber(ev: number) {
    const nameIndex = this.showVerificationNumber
      ? 'verificationNumber'
      : 'mobilNumber';
    switch (ev) {
      case 10:
        this[nameIndex] = this[nameIndex].substring(
          0,
          this[nameIndex].length - 1
        );
        break;
      case 11:
        this.sendSMSVerificationNumber();
        break;
      default:
        this[nameIndex] = this[nameIndex] + ev;
        break;
    }
  }

  async sendSMSVerificationNumber() {
    this.globalService.showLoading('');

    const params = JSON.stringify({
      phone_number: `57${this.mobilNumber}`,
      log_signup_id: '',
    });
    const requestParams = JSON.stringify({
      payload: this.encryptService.encrypt(String(params), this.env.host.key),
    });

    this.globalService
      .requestPost(ServicesParams.verificationCode, requestParams)
      .subscribe(
        (data) => {
          this.numberFormated = `${this.mobilNumber.substring(
            -1,
            3
          )}-${this.mobilNumber.substring(3, 6)}-${this.mobilNumber.substring(
            6,
            10
          )}`;
          const dataResponse = this.encryptService.decrypt(
            data.payload,
            this.env.host.key
          );

          this.panelNumbers = this.config.panelVerificationNumber;
          this.showVerificationNumber = true;
          this.globalService.logData.numeroCelular = this.mobilNumber;

          this.globalService.ionViewDidLoad();
        },
        (error) => {
          this.globalService.ionViewDidLoad();
          console.log(error);
        }
      );
  }

  public async onVerificationNumber() {
    if (this.verificationNumber.length === 4) {
      if (this.config.numberVaidation === this.verificationNumber) {
        this.globalService.logData.codigoVerificacion = this.verificationNumber;
        this.httpService.goTo(this.config.routes.pageRegister);

        this.clearData();
        return;
      }

      const modalResult = await this.globalService.modalGlobal(
        ErrorModalComponent,
        { message: this.config.errorMsg },
        false,
        'error-modal-alert'
      );

      if (modalResult) {
        this.sendSMSVerificationNumber();

        this.verificationNumber = '';
        return;
      }

      this.verificationNumber = '';
    }
  }
}
