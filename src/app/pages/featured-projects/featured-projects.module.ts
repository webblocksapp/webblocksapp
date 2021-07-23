import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/modules/shared.module';
import { FeaturedProjectsComponent } from './featured-projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  declarations: [FeaturedProjectsComponent, ProjectCardComponent],
  imports: [SharedModule],
  exports: [FeaturedProjectsComponent],
})
export class FeaturedProjectsModule {}
