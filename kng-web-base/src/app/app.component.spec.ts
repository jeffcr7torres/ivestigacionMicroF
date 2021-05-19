import {TestBed, async, ComponentFixture, waitForAsync} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {
  KFooterModule,
  KCommonModule,
  UserService,
  CorpService,
  initializerAppUserSession,
  appInitializerEnvAppConfig,
  EnvAppConfigService
} from '@ec.com.kruger/kng-components';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {KeycloakAngularModule} from 'keycloak-angular';
import {APP_INITIALIZER} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule, BrowserAnimationsModule, KeycloakAngularModule,
        KCommonModule, KFooterModule
      ],
      providers: [
        UserService,
        CorpService,
        {
          provide: APP_INITIALIZER,
          useFactory: initializerAppUserSession,
          multi: true,
          deps: [UserService]
        },
        {
          provide: APP_INITIALIZER,
          useFactory: appInitializerEnvAppConfig,
          multi: true,
          deps: [EnvAppConfigService]
        },
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
