import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/modules/shared.module';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { ResumeComponent } from './resume.component';

@NgModule({
  declarations: [ResumeComponent, ExperienceCardComponent],
  imports: [SharedModule],
  exports: [ResumeComponent],
})
export class ResumeModule {}
