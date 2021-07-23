import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturedProjectsComponent } from './pages/featured-projects/featured-projects.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFound404Component } from './pages/not-found-404/not-found-404.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'featured-projects', component: FeaturedProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: '404', component: NotFound404Component },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
