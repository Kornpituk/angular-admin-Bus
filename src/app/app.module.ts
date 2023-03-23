import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { AnalysitComponent } from './analysit/analysit.component';
import { SidebarComponent } from './layout/component/sidebar/sidebar.component';
import { SidebarMemuComponent } from './layout/component/sidebar/sidebar-memu/sidebar-memu.component';
import { SidebarSubmenuComponent } from './layout/component/sidebar/sidebar-submenu/sidebar-submenu.component';
import { NftSingleCardComponent } from './layout/component/nft-single-card/nft-single-card.component';
import { NgOptimizedImage } from '@angular/common';
import { ChartCardComponent } from './layout/component/chart-card/chart-card.component';
import { TableItemComponent } from './layout/component/table-item/table-item.component';
import { DualCardComponent } from './layout/component/dual-card/dual-card.component';

import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { FooterComponent } from './footer/footer.component';
import { ConsoleContentComponent } from './layout/component/console-content/console-content.component';
import { DividerComponent } from './layout/component/divider/divider.component';
import { ProfileComponent } from './layout/user/profile/profile.component';
import { FormComponent } from './page/form/form.component';
import { LoginEnpIdComponent } from './authentication/login-enp-id/login-enp-id.component';
import { WaitVerifyComponent } from './page/wait-verify/wait-verify.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatePickerComponent } from './layout/component/date-picker/date-picker.component';

import {MatNativeDateModule} from '@angular/material/core';


// import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
// var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

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
    SidebarSubmenuComponent,
    NftSingleCardComponent,
    ChartCardComponent,
    TableItemComponent,
    DualCardComponent,
    FooterComponent,
    ConsoleContentComponent,
    DividerComponent,
    ProfileComponent,
    FormComponent,
    LoginEnpIdComponent,
    WaitVerifyComponent,
    DatePickerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    NgOptimizedImage,
    ToastrModule.forRoot(),
    jqxChartModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
