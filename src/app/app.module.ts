import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboaedComponent } from './dashboaed/dashboaed.component';
import { DataTableComponent } from './data-table/data-table.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { DataService } from './services/data.service';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    SidebarComponent,
    DashboaedComponent,
    DataTableComponent,
    UploadFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule

  ],
  providers: [DataService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent,DataTableComponent]
})
export class AppModule { }
