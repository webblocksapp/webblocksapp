import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/modules/shared.module';
import { HomeModule } from './pages/home/home.module';
import { FeaturedProjectsModule } from './pages/featured-projects/featured-projects.module';
import { ResumeModule } from './pages/resume/resume.module';
import { RouterModule } from '@angular/router';
import { NotFound404Component } from './pages/not-found-404/not-found-404.component';
import { AboutModule } from './pages/about/about.module';

@NgModule({
  declarations: [AppComponent, NotFound404Component],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HomeModule,
    FeaturedProjectsModule,
    ResumeModule,
    RouterModule,
    AboutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
