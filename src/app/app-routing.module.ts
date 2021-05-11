import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
// imports: [ RouterModule.forRoot(routes) ],



const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
   },
   {
    path:'blog',
    component:BlogComponent
   },
   {
  path:'**',
  component:PageNotFoundComponent
 }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
})
export class AppRoutingModule { }
