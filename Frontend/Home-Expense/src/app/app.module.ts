import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MonthsComponent } from './months/months.component';
import { MonthComponent } from './month/month.component';
import { TableComponent } from './table/table.component';
import { NumberToMonthPipe } from './Pipes/number-to-month.pipe';
import { MonthToNumberPipe } from './Pipes/month-to-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    MonthsComponent,
    MonthComponent,
    TableComponent,
    NumberToMonthPipe,
    MonthToNumberPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
