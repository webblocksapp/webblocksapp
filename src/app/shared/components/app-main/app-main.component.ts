import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        grid-area: main;
      }
    `,
  ],
})
export class AppMainComponent {
  @HostBinding() class: string =
    'p-3 d-flex justify-content-center w-100 overflow-auto';
}
