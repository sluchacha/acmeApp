import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { WithdrawFormComponent } from './account-details/withdraw-form/withdraw-form.component';

export const AllComponents: any = [
  AccountDetailsComponent,
  WithdrawFormComponent
];

export const EntryComponents: any = [
  WithdrawFormComponent
];

const routes: Routes = [
  { path: "accounts", component: AccountDetailsComponent },
  { path: "", redirectTo: "/accounts", pathMatch: "full" },
  { path: "**", redirectTo: "accounts", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
