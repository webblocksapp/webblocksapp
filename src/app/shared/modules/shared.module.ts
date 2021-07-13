import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../components/app-header/app-header.component';
import { AppMainComponent } from '../components/app-main/app-main.component';
import { CardComponent } from '@shared/components/card/card.component';
import { GoogleAdComponent } from '@shared/components/google-ad/google-ad.component';

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppMainComponent,
    CardComponent,
    GoogleAdComponent,
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    AppHeaderComponent,
    AppMainComponent,
    CardComponent,
    GoogleAdComponent,
  ],
})
export class SharedModule {}
