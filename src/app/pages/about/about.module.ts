import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/modules/shared.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [SharedModule],
})
export class AboutModule {}
