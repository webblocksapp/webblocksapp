import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'card',
  template: `<ng-content></ng-content>`,
})
export class CardComponent {
  @HostBinding('class') class: string = 'card shadow mb-4';
}
