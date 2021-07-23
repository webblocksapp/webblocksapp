import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'experience-card',
  template: `
    <card>
      <div
        *ngIf="showHeader"
        class="
          card-header 
          py-3 
          d-flex 
          flex-row 
          align-items-center 
          justify-content-between
        "
      >
        <div class="d-flex align-items-center">
          <div *ngIf="svgs?.length" class="mr-1">
            <img
              *ngFor="let svg of svgs"
              class="mr-1 icon-logo"
              [src]="'/assets/icons/' + svg + '.svg'"
            />
          </div>
          <h5 class="mb-0" *ngIf="label">{{ label }}</h5>
        </div>
        <p class="mb-0" *ngIf="dateRange">
          <em>{{ dateRange }}</em>
        </p>
      </div>
      <div class="card-body">
        <ng-container *ngIf="content">
          <div [innerHTML]="content"></div>
        </ng-container>
        <ng-content></ng-content>
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
export class ExperienceCardComponent implements OnInit {
  @Input() label?: string = '';
  @Input() dateRange?: string = '';
  @Input() svgs?: string[] = [];
  @Input() content?: string = '';

  public showHeader: boolean = false;

  ngOnInit(): void {
    this.computeShowHeader();
  }

  computeShowHeader(): void {
    if (this.label || this.dateRange) this.showHeader = true;
  }
}
