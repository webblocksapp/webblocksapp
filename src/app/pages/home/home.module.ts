import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/modules/shared.module';
import { ProjectCardComponent } from './project-card/project-card.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, ProjectCardComponent],
  imports: [SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
