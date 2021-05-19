import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { KLayoutModule, KPanelMenuModule, KFooterModule, KFieldsetModule,
  KCommonModule, KSearchModule } from '@ec.com.kruger/kng-components';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { KeycloakAngularModule } from 'keycloak-angular';
import { StorageModule } from '@ngx-pwa/local-storage';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { constants } from '../constants/constants';
import { TableModule } from 'primeng/table';
import { CorpService } from './services/corp.service';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    CommonModule,
    ScrollingModule,
    KSearchModule,
    TableModule,
    TableModule,
    KCommonModule.forRoot({
      appVersion: '1.0.0',
      systemId: constants.SYSTEM_ID
    }),
    KeycloakAngularModule,
    AppRoutingModule,
    KLayoutModule,
    KPanelMenuModule,
    KFooterModule,
    KFieldsetModule,
    BsDropdownModule.forRoot(),
    StorageModule.forRoot({ IDBNoWrap: true })
  ],
  providers: [
    CorpService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
