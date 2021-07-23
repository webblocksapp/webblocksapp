import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'avatar',
  template: `
    <ng-container *ngIf="imageUrl">
      <img
        [src]="imageUrl"
        [alt]="alt"
        class="rounded-circle w-100 h-100 img-fluid"
      />
    </ng-container>

    <ng-container *ngIf="!imageUrl">
      <div
        class="
          d-flex 
          align-items-center
          justify-content-center
          rounded-circle 
          w-100 h-100 
          {{ bgColor }} 
          {{ color }}"
      >
        <p class="mb-0 {{ fontSize }}">{{ initials }}</p>
      </div>
    </ng-container>
  `,
  styles: [``],
})
export class AvatarComponent implements OnInit {
  @HostBinding()
  @Input()
  class: string = 'd-block';

  @HostBinding('style') style: any = {
    width: '75px',
    height: '75px',
  };

  @Input()
  set width(width: string) {
    this.style = { ...this.style, width };
  }

  @Input()
  set height(height: string) {
    this.style = { ...this.style, height };
  }

  @Input() alt: string = '';
  @Input() imageUrl: string = '';
  @Input() color: string = 'text-white';
  @Input() bgColor: string = 'bg-gradient-info';
  @Input() fontSize: string = 'display-3';

  public initials: string = '';

  ngOnInit() {
    this.buildNameInitials();
  }

  buildNameInitials(): void {
    const array = this.alt.split(' ');
    this.initials = '';
    array.forEach((item) => {
      this.initials += item.charAt(0);
    });
  }
}
