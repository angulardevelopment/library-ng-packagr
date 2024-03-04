import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor( @Inject('config') private config ) { }

  test(){
    return this.config;
  }
}
