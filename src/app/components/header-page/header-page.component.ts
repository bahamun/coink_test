import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss'],
})
export class HeaderPageComponent implements OnInit {
  @Input() title: string;
  @Input() page: string;

  constructor(public httpService: HttpService) {}

  ngOnInit() {}
}
