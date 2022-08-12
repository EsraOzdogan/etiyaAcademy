import { LoadingService } from './../../../core/services/loading.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  isLoading: Subject<boolean> = this.loaderService.isLoading;
  constructor(private loaderService: LoadingService) { }

  ngOnInit(): void {

  }



}
