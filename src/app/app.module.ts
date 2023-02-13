import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from 'src/material.module';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { AnalysitComponent } from './analysit/analysit.component';
import { SidebarComponent } from './layout/component/sidebar/sidebar.component';
import { SidebarMemuComponent } from './layout/component/sidebar/sidebar-memu/sidebar-memu.component';
import { SidebarSubmenuComponent } from './layout/component/sidebar/sidebar-submenu/sidebar-submenu.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    UpdatepopupComponent,
    UserDashboardComponent,
    SideNavbarComponent,
    AnalysitComponent,
    SidebarComponent,
    SidebarMemuComponent,
    SidebarSubmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
