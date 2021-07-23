import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-container',
  template: ` <ng-content></ng-content> `,
})
export class AppContainerComponent {
  @HostBinding() class: string = 'container container-lg';
}
