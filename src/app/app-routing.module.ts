import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CallbackComponent } from "./callback/callback.component";
import { InfoComponent } from "./info/info.component";

const routes: Routes = [
  { path: 'login/callback', component: CallbackComponent },
  { path: 'info', component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
