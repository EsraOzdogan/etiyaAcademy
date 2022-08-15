import { Injectable } from '@angular/core';
import { StorageService } from './storageService';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements StorageService{
  constructor() {}

  public set(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  public get(key: string): string | null {
    return localStorage.getItem(key);
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }
}
