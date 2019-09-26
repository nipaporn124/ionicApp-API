import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'app',
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },
   { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'invoices-view', loadChildren: './invoices/invoices-view/invoices-view.module#InvoicesViewPageModule' },
  // { path: 'invoices-list', loadChildren: './invoices-list/invoices-list.module#InvoicesListPageModule' },
  // { path: 'invoices-list', loadChildren: './invoices/invoices-list/invoices-list.module#InvoicesListPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
