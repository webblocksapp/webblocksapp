import { Component, HostBinding } from '@angular/core';
import Link from '@shared/types/link.type';

@Component({
  selector: 'app-header-navbar',
  template: `
    <a class="navbar-brand" [routerLink]="'/'">Webblocksapp</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li *ngFor="let link of links" class="nav-item">
          <a
            class="nav-link"
            [routerLinkActive]="'text-gray-100'"
            [routerLink]="link.url"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  `,
})
export class HeaderNavbarComponent {
  @HostBinding() class = 'navbar navbar-expand-lg navbar-dark p-0';

  public links: Link[] = [
    { url: '/home', label: 'Home' },
    { url: '/about', label: 'About' },
    { url: '/resume', label: 'Experience' },
    { url: '/featured-projects', label: 'Projects' },
  ];
}
