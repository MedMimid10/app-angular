import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataTableComponent } from './data-table/data-table.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { DashboaedComponent } from './dashboaed/dashboaed.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'sidebar',
    component: SidebarComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboaedComponent },
      { path: 'DataTable', component: DataTableComponent },
      { path: 'Upload-files', component: UploadFileComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
