import { Component } from '@angular/core';
import { ExperienceCard } from './experience-card/types';

@Component({
  selector: 'resume',
  template: `
    <div class="row py-3">
      <div class="col-lg-12 mb-5" *ngFor="let experience of experiences">
        <experience-card
          [svgs]="experience.svgs"
          [label]="experience.label"
          [dateRange]="experience.dateRange"
          [content]="experience.content"
        ></experience-card>
      </div>
      <div class="col-lg-12 d-flex justify-content-between w-100 mb-5">
        <a [routerLink]="['/about']" class="btn btn-info"> &larr; About </a>
        <a [routerLink]="['/featured-projects']" class="btn btn-info">
          Projects &rarr;
        </a>
      </div>
    </div>
  `,
})
export class ResumeComponent {
  public experiences: ExperienceCard[] = [
    {
      svgs: ['react', 'laravel'],
      label: 'Full Stack ReactJS - Laravel Developer',
      dateRange: 'Sep 2019 - Jul 2021',
      content: `
        <h5 class="mb-4">Decameron's Hotels</h5>
        <p>
          Development of a multi-tenant app to manage all Decameron’s Hotels
          and provide remote assistance to Decameron’s hosts, offering
          different booking services as restaurants, activities and tours
          using ReactJS + Typescript, Laravel 5.6 and Bamboo.
        </p>
        <ul>
          <li>
            Automate and modernize on 80% the booking process and data
            visualization of the different services offered by hotels as
            restaurants, activities and tours.
          </li>
          <li>
            Decrease operating load for administrative users on a 70%,
            building intuitive user interfaces to ease the multiple
            configuration of repetitive data.
          </li>
          <li>
            <strong>
              <em
                >Build and standardize frontend components and backend APIs
              </em>
            </strong>
            for CRUD actions, form validations, and reports visualization,
            speeding up the development process for further Decameron’s
            projects.
          </li>
        </ul>
      `,
    },
    {
      svgs: ['angular', 'laravel'],
      label: 'Full Stack Angular - Laravel Developer',
      dateRange: 'Sep 2018 - Sep 2019',
      content: `
      <h5 class="mb-4">Bendita Essence</h5>
        <p>
          Development of an intranet in Angular 7 and Laravel 5.6 with a mobile app using Ionic 4 for a 
          rating system of Abbott’s colombian sales points.
        </p>
        <ul>
          <li>
            Development of dashboards with filtering options to visualize 
            strategic data for Abbott’s Marketing area helping to increase Abbott’s 
            sales above 100%.
          </li>
          <li>
            Improve the data analisis for Abbott’s Marketing area developing a surveys 
            builder managed from the intranet and answered from the mobile app 
            by the sales points’s visitors.
          </li>          
        </ul>
      `,
    },
  ];
}
