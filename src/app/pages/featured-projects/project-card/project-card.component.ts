import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'project-card',
  template: `
    <card>
      <div
        class="card-header py-3 d-flex justify-content-between w-100 align-items-center"
      >
        <h6
          *ngIf="header"
          class="m-0 font-weight-bold text-primary"
          [innerHTML]="header"
        ></h6>
        <img
          *ngIf="svg"
          class="icon-logo"
          [src]="'/assets/icons/' + svg + '.svg'"
        />
      </div>
      <div *ngIf="body" class="card-body">
        {{ body }}
      </div>
      <div *ngIf="link" class="d-flex justify-content-end p-4">
        <a
          href="https://ngdatagroups.webblocksapp.com/"
          target="blank"
          class="btn btn-primary btn-icon-split"
        >
          <span class="text">Watch more</span>
        </a>
      </div>
    </card>
  `,
  styles: [
    `
      .icon-logo {
        width: 40px;
        height: 40px;
      }
    `,
  ],
})
export class ProjectCardComponent {
  @Input() header?: string;
  @Input() svg?: 'angular';
  @Input() body?: string;
  @Input() link?: string;
}
