import { Component, OnInit } from '@angular/core';
import { ServicesParams } from 'src/app/constants/services.params';
import { EncryptService } from 'src/app/services/encrypt.service';
import { GlobalService } from 'src/app/services/global.service';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { entryConfig } from './entry.config';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.page.html',
  styleUrls: ['./entry.page.scss'],
})
export class EntryPage implements OnInit {
  public config = entryConfig;

  constructor(
    private globalService: GlobalService,
    private httpService: HttpService
  ) {}

  async ngOnInit() {}

  public goTo() {
    this.httpService.goTo(this.config.routes.pageMobilNumber);
  }
}
