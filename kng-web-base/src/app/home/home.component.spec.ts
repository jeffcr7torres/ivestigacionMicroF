import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { KLayoutModule, KPanelMenuModule, KCommonModule, UserService, KMessageService, CorpService } from '@ec.com.kruger/kng-components';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule,  } from '@angular/common';
import { KeycloakAngularModule } from 'keycloak-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';
import { BlockUIModule } from 'ng-block-ui';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let messageService: KMessageService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        BlockUIModule.forRoot(),
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
      providers: [UserService, CorpService, KMessageService, ConfirmationService, KMessageService]
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

  it('should render messageSuccess', () => {
    spyOn(messageService, 'success').and.callThrough();
    component.messageSuccess();
    expect(messageService.success).toHaveBeenCalled();
  });

  it('should render messageInfo', () => {
    spyOn(messageService, 'info').and.callThrough();
    component.messageInfo();
    expect(messageService.info).toHaveBeenCalled();
  });

  it('should render messageWarning', () => {
    spyOn(messageService, 'warning').and.callThrough();
    component.messageWarning();
    expect(messageService.warning).toHaveBeenCalled();
  });

  it('should render messageError', () => {
    spyOn(messageService, 'error').and.callThrough();
    component.messageError();
    expect(messageService.error).toHaveBeenCalled();
  });

  it('should render formValid', () => {
    spyOn(messageService, 'info').and.callThrough();
    component.formValid();
    expect(messageService.info).toHaveBeenCalled();
  });
});
