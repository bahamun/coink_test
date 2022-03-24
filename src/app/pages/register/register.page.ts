import { HttpService } from './../../services/http.service';
import { registerConfig } from './register.config';
import { ServicesParams } from './../../constants/services.params';
import { GlobalService } from 'src/app/services/global.service';
import { RegisterViewModel } from './register.view-model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('expeditionDateDT')
  expeditionDateDT: IonDatetime;
  @ViewChild('birthDateDT') birthDateDT: IonDatetime;

  public config = registerConfig;

  public showPassword = false;
  public showConfirmPassword = false;

  public genderType: Record<string, unknown>[];
  public documentType: Record<string, unknown>[];

  public viewModel = new RegisterViewModel();

  constructor(
    private globalService: GlobalService,
    private httpService: HttpService
  ) {
    this.viewModel.buildForm();
  }

  async ngOnInit() {
    await this.getDocumentType();
    await this.getGender();
  }

  async getDocumentType() {
    this.globalService.requestGet(ServicesParams.documentTypeList).subscribe(
      (data) => {
        this.documentType = data;
      },
      (error) => {
        this.globalService.ionViewDidLoad();
        console.log(error);
      }
    );
  }

  async getGender() {
    this.globalService.requestGet(ServicesParams.genderList).subscribe(
      (data) => {
        this.genderType = data;
      },
      (error) => {
        this.globalService.ionViewDidLoad();
        console.log(error);
      }
    );
  }

  confirm(nameIndex: string) {
    (this[nameIndex] as IonDatetime).confirm(true);
  }

  reset(nameIndex: string) {
    (this[nameIndex] as IonDatetime).cancel(true);
  }

  formatDate(value: string) {
    return format(parseISO(value), 'dd/MM/yyyy');
  }

  public regsiterValidate() {
    this.viewModel.submitted = true;

    if (!this.viewModel.registerForm.valid) {
      return;
    }

    this.updateLog();

    this.httpService.goTo(this.config.routes.pageContract);
  }

  public showPass(nameIndex: string) {
    this[nameIndex] = this[nameIndex] ? false : true;
  }

  private updateLog() {
    this.globalService.logData = {
      ...this.globalService.logData,
      tipoDocumento: this.viewModel.documentType.value,
      numeroDocumento: this.viewModel.ideNumber.value,
      fechaExpedicionDocumento: this.viewModel.expeditionDate.value,
      fechaNacimiento: this.viewModel.birthDate.value,
      genero: this.viewModel.gender.value,
      correo: this.viewModel.email.value,
      password: this.viewModel.password.value,
    };
  }
}
