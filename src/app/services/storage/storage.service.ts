import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storage: any;

  constructor () {
    this.storage = window.localStorage;
  }

  write(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  read(key): string {
    return this.storage.getItem(key);
  }
}
