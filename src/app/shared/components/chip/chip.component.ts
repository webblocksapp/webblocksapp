import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'chip',
  template: `<ng-content></ng-content>`,
  styles: [``],
})
export class ChipComponent {
  @HostBinding() class = `badge badge-primary mx-1 my-2`;
}
