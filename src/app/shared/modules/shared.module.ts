import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../components/app-header/app-header.component';
import { AppMainComponent } from '../components/app-main/app-main.component';
import { CardComponent } from '@shared/components/card/card.component';
import { GoogleAdComponent } from '@shared/components/google-ad/google-ad.component';
import { AvatarComponent } from '@shared/components/avatar/avatar.component';
import { AppContainerComponent } from '@shared/components/app-container/app-container.component';
import { ChipComponent } from '@shared/components/chip/chip.component';
import { RouterModule } from '@angular/router';
import { HeaderNavbarComponent } from '@shared/components/app-header-navbar/app-header-navbar';

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppMainComponent,
    AppContainerComponent,
    CardComponent,
    GoogleAdComponent,
    AvatarComponent,
    ChipComponent,
    HeaderNavbarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    RouterModule,
    AppHeaderComponent,
    AppMainComponent,
    AppContainerComponent,
    CardComponent,
    GoogleAdComponent,
    AvatarComponent,
    ChipComponent,
    HeaderNavbarComponent,
  ],
})
export class SharedModule {}
