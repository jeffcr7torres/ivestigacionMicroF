import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BlockUIModule } from 'ng-block-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { ConfirmationService } from 'primeng/api';
import {
  CorpService,
  KCommonModule,
  KLayoutModule,
  KMessageService,
  KPanelMenuModule,
  UserService
  } from '@ec.com.kruger/kng-components';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { KeycloakAngularModule } from 'keycloak-angular';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { CommonModule,  } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let messageService: KMessageService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        BlockUIModule.forRoot(),
        ModalModule.forRoot(),
        ToastrModule.forRoot({
          positionClass: 'toast-bottom-full-width',
          preventDuplicates: true,
          closeButton: true,
          newestOnTop: true,
          progressBar: true,
          enableHtml: true,
          timeOut: 30000,
          extendedTimeOut: 15000,
        }),
        CommonModule, HttpClientTestingModule, RouterTestingModule, BrowserAnimationsModule,
        KCommonModule, KeycloakAngularModule, KLayoutModule, KPanelMenuModule],
      providers:
        [UserService, CorpService, KMessageService, ConfirmationService, KMessageService,
        {
            provide: KMessageService,
            useValue: jasmine.createSpyObj('KMessageService', ['info', 'success', 'warning', 'error'])
        },
        {
          provide: HomeComponent,
          useValue: jasmine.createSpyObj('HomeComponent', ['newElement'])
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    messageService = TestBed.inject(KMessageService);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    spyOn(component.keycloakService, 'getUserRoles').and.returnValue(['HOME', 'SEND_MESSAGE']);
    spyOn(component.keycloakService, 'getUsername').and.returnValue('FRM0');
    spyOn(component.keycloakService, 'isUserInRole').and.returnValue(true);
    spyOn(component.keycloakService, 'loadUserProfile').and.returnValue(Promise.resolve<Keycloak.KeycloakProfile>({
      id: '12345',
      username: 'smxadmin',
      email: 'smxadmin@favorita.ec',
      firstName: 'Super',
      lastName: 'Admin',
      enabled: true,
      emailVerified: true,
      totp: false,
      createdTimestamp: 1579819128042
    }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
