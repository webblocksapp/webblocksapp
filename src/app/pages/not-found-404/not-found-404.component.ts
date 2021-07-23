import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'not-found-404',
  template: `
    <div class="text-center">
      <div class="error mx-auto" data-text="404">404</div>
      <p class="lead text-gray-800 mb-5">Page Not Found</p>
      <p class="text-gray-500 mb-0">
        It looks like you found a glitch in the matrix...
      </p>
      <a [routerLink]="'/'">&larr; Back to Home</a>
    </div>
  `,
})
export class NotFound404Component {
  @HostBinding() class: string =
    'd-flex flex-flow-column justify-content-center align-items-center h-100';
}
