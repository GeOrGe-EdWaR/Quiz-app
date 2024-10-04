import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  constructor(private spinnerService: NgxSpinnerService) {}

  busy() {
    this.spinnerService.show(undefined, {
      type: 'ball-clip-rotate-pulse',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      size: 'default',
    });
  }

  idle() {
      this.spinnerService.hide();
  }
}
