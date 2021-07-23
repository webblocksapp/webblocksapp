import { Component, HostBinding } from '@angular/core';
import { calcYears } from '@shared/utils/functions';
import { YEAR_STARTED_TO_DEVELOP } from '@shared/utils/constants';

@Component({
  selector: 'home',
  template: `
    <avatar
      imageUrl="assets/images/avatar/MR.jpeg"
      alt="Mauricio Rivera"
      width="200px"
      height="200px"
    ></avatar>
    <div class="my-3">
      <h2>Mauricio Rivera</h2>
      <h5>Webblocksapp Maintainer</h5>
    </div>
    <p>
      Software Engineer with {{ yearsDeveloping }}+ years of experience
      developing web applications using Typescript, PHP, Angular, ReactJS and
      Laravel. Involved on building high scalable frontend components and
      backend APIs standardization to speed up programming. Very interested in
      working under organized software development methodologies, also in
      contributing to find clean and elegant solutions to facilitate and
      expedite the maintainability and developing of world class software. In
      love with Angular 8+ on Frontend and Laravel 5.6 and NestJS on Backend.
    </p>
    <div
      class="
          mt-3 
          d-flex 
          align-items-center 
          flex-wrap 
          space-between 
          justify-content-center
        "
    >
      <p class="mb-0"><strong>Skills:</strong></p>
      <chip *ngFor="let skill of skills">{{ skill }}</chip>
    </div>
    <a [routerLink]="['/about']" class="btn btn-info mt-5"> About me &rarr;</a>
  `,
  styles: [],
})
export class HomeComponent {
  @HostBinding() class: string =
    'd-flex flex-column align-items-center justify-content-center h-100 text-center';

  public skills: string[] = [
    'Angular 8+',
    'Laravel 5.6+',
    'Yii2',
    'Ionic 4+',
    'ReactJS',
    'ReactJs + Typescript',
    'NestJS',
    'AdonisJS',
    'Bootstrap 4+',
    'Angular Material',
    'React Material',
  ];

  public yearsDeveloping: number = calcYears(YEAR_STARTED_TO_DEVELOP);
}
