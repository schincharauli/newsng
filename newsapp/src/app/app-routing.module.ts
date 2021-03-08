import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinesnewsComponent } from './bussinesnews/bussinesnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  // home 
  { path:'', component:TopheadingComponent},

  // technology
  {path:'tech', component:TechnewsComponent},
  {path: 'business',component:BussinesnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
