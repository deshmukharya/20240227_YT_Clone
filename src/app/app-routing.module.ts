import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import { SettingComponent } from './setting/setting.component';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [

  {
    path:"",
    component:MaincontainerComponent
  },
  {
    path:"setting",
    component:SettingComponent
  },
  {
    path:"filter",
    component:FilterComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
