import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  //isLoading = new Subject<boolean>();

  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {
  }

    // show() {
    //     this.isLoading.next(true);
    // }
    // hide() {
    //     this.isLoading.next(false);
    // }

    setIsLoading(loading: boolean) {
      this.isLoading.next(loading);
    }

}
