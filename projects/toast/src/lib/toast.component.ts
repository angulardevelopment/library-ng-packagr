import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'lib-toast',
  template: `
    <p>
      toast works!
    </p>
  `,
  styles: [
  ]
})
export class ToastComponent implements OnInit {

  constructor(public  toast: ToastService) { }

  ngOnInit(): void {
    console.log(this.toast.test(), 'toasttoast');
  }

}
