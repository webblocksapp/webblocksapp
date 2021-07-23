import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-main>
      <app-container>
        <router-outlet></router-outlet>
      </app-container>
    </app-main>
  `,
  styles: [
    `
      app-root {
        display: grid;
        height: 100vh;
        grid-template-rows: 60px 1fr;
        grid-template-areas:
          'header'
          'main';
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'webblocksapp';
}
