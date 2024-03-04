import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-awesome',
  template: `
    <p>
      awesome works!
    </p>
  `,
  styles: [
  ]
})
export class AwesomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
