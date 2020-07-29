import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModaltarikComponent } from './components/modaltarik/modaltarik.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormAddAdvertComponent } from './components/form-add-advert/form-add-advert.component';
import { DropDown1Component } from './components/drop-down1/drop-down1.component';
import { Alert1Component } from './components/alert1/alert1.component';
import { Accordeon1Component } from './components/accordeon1/accordeon1.component';
import { MenuTab1Component } from './components/menu-tab1/menu-tab1.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { HeaderComponent } from './components/header/header.component';
import { Jumbo1Component } from './components/jumbo1/jumbo1.component';
import { HomeComponent } from './components/home/home.component';
import { AddAdvertComponent } from './components/add-advert/add-advert.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { MyslideshowComponent } from './components/myslideshow/myslideshow.component';
import { SearchBarContentComponent } from './components/search-bar-content/search-bar-content.component';
import { Ng5SliderModule } from 'ng5-slider';
import { ClientViewComponent } from './components/client-view/client-view.component';
import { AdminComponent } from './components/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    ModaltarikComponent,
    FormAddAdvertComponent,
    DropDown1Component,
    Alert1Component,
    Accordeon1Component,
    MenuTab1Component,
    NavTabsComponent,
    HeaderComponent,
    Jumbo1Component,
    HomeComponent,
    AddAdvertComponent,
    SearchbarComponent,
    MyslideshowComponent,
    SearchBarContentComponent,
    ClientViewComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    RatingModule.forRoot(),
    Ng5SliderModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
