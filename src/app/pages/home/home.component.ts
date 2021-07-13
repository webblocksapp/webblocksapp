import { Component } from '@angular/core';
import { ProjectCard } from './project-card/types';

@Component({
  selector: 'home',
  template: `
    <h2 class="text-center main-title p-4">
      Providing great libraries for Web UI Javascript Development
    </h2>

    <section class="mt-4">
      <h5>Featured Projects</h5>
      <div class="row mt-4">
        <div
          *ngFor="let featuredProject of featuredProjects"
          class="col-md-4 col-sm-6 col-xs-12"
        >
          <project-card
            [header]="featuredProject.header"
            [svg]="featuredProject.svg"
            [body]="featuredProject.body"
            [link]="featuredProject.link"
          ></project-card>
        </div>
      </div>
      <div class="row">
        <div class="col-12 w-100 mt-3">
          <card style="min-height: 160px; max-width: 900px; margin: auto;">
            <google-ad></google-ad>
          </card>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .main-title {
        width: 100%;
        max-width: 520px;
        margin: auto;
      }
    `,
  ],
})
export class HomeComponent {
  public featuredProjects: ProjectCard[] = [
    {
      header: 'NG Data Groups',
      svg: 'angular',
      body: `
        NG Data Groups is an small Angular framework designed to make
        easier form building and validations. But not only that, you can
        create complex data structures and convert them into UI data
        inputs easily with validations.
      `,
      link: 'https://ngdatagroups.webblocksapp.com',
    },
  ];
}
