import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'google-ad',
  template: `
    <ins
      class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-5056055199537470"
      data-ad-slot="1677375459"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class GoogleAdComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    (adsbygoogle = window.adsbygoogle || []).push({});
  }
}
