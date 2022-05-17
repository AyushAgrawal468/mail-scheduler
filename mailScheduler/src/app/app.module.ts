import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login/login.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { MainInterfaceComponent } from './main-interface/main-interface.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { AddAccountFormComponent } from './add-account-form/add-account-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from "@angular/material/tabs";



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginComponent,
    RegisterComponent,
    MainInterfaceComponent,
    AccountsComponent,
    AddAccountFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatTabsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
