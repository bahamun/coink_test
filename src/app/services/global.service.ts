import { Injectable } from '@angular/core';
import { ComponentRef } from '@ionic/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoadingController, ModalController } from '@ionic/angular';
import { LogDataModel } from '../models/log-data.model';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public logData: LogDataModel;
  private alreadyDismissed = false;
  private env = environment;

  constructor(
    private http: HttpClient,
    private loadingController: LoadingController,
    private modalController: ModalController
  ) {
    this.logData = {
      numeroCelular: '',
      codigoVerificacion: '',
      tipoDocumento: '',
      numeroDocumento: '',
      fechaExpedicionDocumento: '',
      fechaNacimiento: '',
      genero: '',
      correo: '',
      password: '',
    };
  }

  public requestPost(funct: string, params): Observable<any> {
    return this.http
      .post(this.env.host.coinApi + funct + this.env.host.apiKey, params)
      .pipe(
        tap((data) => {}),
        catchError(this.handleError)
      );
  }

  public requestGet(funct: string): Observable<any> {
    return this.http
      .get(this.env.host.coinApi + funct + this.env.host.apiKey)
      .pipe(
        tap((data) => {}),
        catchError(this.handleError)
      );
  }

  public async showLoading(msn: string) {
    if (this.alreadyDismissed) {
      await this.loadingController.dismiss();
    }

    this.alreadyDismissed = true;
    await this.loadingController
      .create({
        cssClass: 'loading-custom-class',
        spinner: 'bubbles',
        message: msn,
      })
      .then((a) => {
        a.present().then(async () => {
          if (!this.alreadyDismissed) {
            await a.dismiss();
          }
        });
      });
  }

  public async ionViewDidLoad() {
    this.alreadyDismissed = false;
    await this.loadingController.dismiss();
  }

  public async modalGlobal(
    componentRef: ComponentRef,
    params: Record<string, unknown>,
    bDropDis: boolean,
    customCalss?: string
  ): Promise<unknown> {
    const globalModal = await this.modalController.create({
      component: componentRef,
      componentProps: params,
      backdropDismiss: bDropDis,
      cssClass: customCalss,
    });
    await globalModal.present();
    const modalReturn = await globalModal.onDidDismiss();
    return modalReturn.data;
  }

  private handleError(data: HttpErrorResponse) {
    console.log('handleError', data);
    if (data.error instanceof ErrorEvent) {
      console.log('Error desde el cliente: ', data.error.message);
    } else {
      console.log(
        'Error desde el server: code, ' +
          data.status +
          ' bodyMessage: ' +
          data.message
      );
    }
    return throwError(data);
  }
}
