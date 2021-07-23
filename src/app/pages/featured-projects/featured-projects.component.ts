import { Component, HostBinding } from '@angular/core';
import { ProjectCard } from './project-card/types';

@Component({
  selector: 'featured-projects',
  template: `
    <h5>Featured Projects</h5>
    <div class="row mt-4">
      <div
        *ngFor="let featuredProject of featuredProjects"
        class="col-lg-12 mb-5"
      >
        <project-card
          [header]="featuredProject.header"
          [svg]="featuredProject.svg"
          [body]="featuredProject.body"
          [link]="featuredProject.link"
        ></project-card>
      </div>
    </div>

    <div class="d-flex justify-content-center w-100">
      <a [routerLink]="['/resume']" class="btn btn-info mt-5">
        &larr; Experience
      </a>
    </div>
  `,
  styles: [``],
})
export class FeaturedProjectsComponent {
  @HostBinding() class: string = 'mt-4';
  public featuredProjects: ProjectCard[] = [
    {
      header: 'NG Data Groups <i><small>(Work in progress)</small></i>',
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
