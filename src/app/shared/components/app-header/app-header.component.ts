import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ` <app-header-navbar></app-header-navbar> `,
  styles: [
    `
      :host {
        grid-area: header;
      }
    `,
  ],
})
export class AppHeaderComponent {
  @HostBinding('class') class: string =
    'bg-gray-700 text-gray-100 d-flex align-items-center px-3 w-100 py-1';
}
