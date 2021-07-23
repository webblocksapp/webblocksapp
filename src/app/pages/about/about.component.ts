import { Component, HostBinding } from '@angular/core';
import { calcYears, calcYearsBetweenDates } from '@shared/utils/functions';
import { BIRTH_DATE, YEAR_STARTED_TO_DEVELOP } from '@shared/utils/constants';

type ExperienceItem = {
  label: string;
  description: string | number;
};

type Skills = {
  now: number;
  max: number;
  name: string;
};

@Component({
  selector: 'about',
  template: `
    <div class="text-justify w-100">
      <h2>About me</h2>
      <p>
        Hi! I'm Mauricio Rivera, <strong>Full Stack Web Developer</strong>. In
        love with Angular 8+ on Frontend and NestJS on Backend. <br />
        <strong>Always trying to do more with less code!</strong> <br /><br />
        <i>
          In my spare time I like to write symphonic music and share time with
          my loved wife.
        </i>
      </p>
    </div>
    <div class="text-justify mt-5">
      <h3 class="mb-4">Personal Information</h3>
      <div class="row">
        <div
          *ngFor="let experienceItem of experienceItems"
          class="col-md-6 col-sm-12"
        >
          <p>
            <strong>{{ experienceItem.label }}</strong> {{ ' ' }}
            <span [innerHtml]="experienceItem.description"></span>
          </p>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <h3 class="mb-4">Skills</h3>
      <div class="row">
        <div
          *ngFor="let skill of skills"
          class="col-md-6 col-sm-12 mb-3 d-flex align-items-center flex-wrap"
        >
          <div class="col-md-3 col-sm-12 p-0 pr-2">
            <small>
              <strong>{{ skill.name }}</strong>
            </small>
          </div>
          <div class="col-md-9 col-sm-12 p-0">
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: {{ skill.now }}%;"
                [attr.aria-valuenow]="skill.now"
                [attr.aria-valuemin]="0"
                [attr.aria-valuemax]="100"
                [ngClass]="{
                  'bg-danger': skill.now < 60,
                  'bg-warning': skill.now < 80,
                  'bg-info': skill.now < 90,
                  'bg-success': skill.now <= 100
                }"
              >
                {{ skill.now }}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between w-100">
      <a [routerLink]="['/home']" class="btn btn-info mt-5"> &larr; Home </a>
      <a [routerLink]="['/resume']" class="btn btn-info mt-5">
        Experience &rarr;
      </a>
    </div>
  `,
})
export class AboutComponent {
  @HostBinding() class: string =
    'd-flex flex-column h-100 justify-content-center align-items-center';

  public yearsDeveloping: number = calcYears(YEAR_STARTED_TO_DEVELOP);
  public birthDate: string = BIRTH_DATE;
  public age: number = calcYearsBetweenDates(new Date(BIRTH_DATE), new Date());

  public experienceItems: ExperienceItem[] = [
    { label: 'Birth date:', description: this.birthDate },
    { label: 'Age:', description: this.age },
    {
      label: 'LinkedIn:',
      description: `
        <a target="blank" href="https://www.linkedin.com/in/mauricio-rivera-webblocksapp/">
          in/mauricio-rivera-webblocksapp
        </a>
      `,
    },
    { label: 'Birth date:', description: this.birthDate },
    { label: 'Email:', description: 'mauriver21@gmail.com' },
    {
      label: 'Phone:',
      description:
        '<img class="mb-1 ml-1" src="/assets/icons/whatsapp.svg" width="24" height="24" /> +57 312 431 6446',
    },
  ];

  public skills: Skills[] = [
    { now: 0, max: 95, name: 'Angular 8+' },
    { now: 0, max: 92, name: 'React + Typescript' },
    { now: 0, max: 90, name: 'React Material UI' },
    { now: 0, max: 90, name: 'Angular Material' },
    { now: 0, max: 90, name: 'Bootstrap 4' },
    { now: 0, max: 85, name: 'Typescript' },
    { now: 0, max: 80, name: 'Laravel 5.6+' },
    { now: 0, max: 80, name: 'Yii2' },
    { now: 0, max: 80, name: 'Git' },
    { now: 0, max: 80, name: 'MySQL' },
    { now: 0, max: 75, name: 'Ionic 4+' },
    { now: 0, max: 70, name: 'NestJS' },
    { now: 0, max: 70, name: 'AdonisJS' },
  ];

  ngOnInit(): void {
    this.initSkills();
  }

  initSkills(): void {
    this.skills.forEach((skill) => {
      const interval = setInterval(() => {
        skill.now++;
        if (skill.now === skill.max) {
          clearInterval(interval);
        }
      }, 10);
    });
  }
}
