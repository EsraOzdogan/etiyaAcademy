import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = new Subject<boolean>();

  //public isLoading = new BehaviorSubject(false);
  constructor() {
  }

    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);
    }

}
