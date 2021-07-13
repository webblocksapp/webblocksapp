import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `Webblocksapp`,
  styles: [
    `
      :host {
        grid-area: header;
      }
    `,
  ],
})
export class AppHeaderComponent {
  @HostBinding('class') class: string = 'bg-gray-700 text-gray-100 p-3';
}
