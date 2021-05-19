import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PrimeNgEs, KMessageService, EnvAppConfigService, UserService,
  SearchModel, searchconstants, OptionConfigModel
} from '@ec.com.kruger/kng-components';
import { KeycloakService } from 'keycloak-angular';
import AppConfigType from 'src/environments/AppConfigType';
import { CorpService } from '../services/corp.service';
import { constants } from '../../constants/constants';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  es = PrimeNgEs;
  processName = new SearchModel(searchconstants.DATA_TYPES.STRING.native, 'processName');
  tiposDocumento = new SearchModel(searchconstants.DATA_TYPES.INTEGER.native, 'tiposDocumento');
  optionSettingsAll: OptionConfigModel = new OptionConfigModel(false, false, true);
  public results: any[] = [];
  public paginate_results: any[] = [];
  rows = 10;
  constructor(
    private corpService: CorpService,
    private readonly messageService: KMessageService,
    public readonly keycloakService: KeycloakService,
    public readonly userService: UserService,
    private readonly envAppConfigService: EnvAppConfigService<AppConfigType>) { }

  ngOnInit() {
    console.log('ROLES', this.keycloakService.getUserRoles());
    console.log('user name', this.keycloakService.getUsername());
    this.userService.userInfo().then((userInfo) => {
      console.log('UserInfo', userInfo);
    });
    this.keycloakService.loadUserProfile()
      .then((profile) => {
        console.log('USER PROFILE', profile);
      });
    this.showEnvData();
  }

  clickSearch(form) {
    this.corpService.getUsersByCode({
      tipoContacto: constants.OFFICIAL_TYPE_CONTACT,
      nombreCompleto: form.value.processName.parameterValue.toUpperCase(),
      tipoUsuario: 'INTERNO'
    }).subscribe((result) => {
      if (!result || result.status === 400) {
        this.messageService.error('No se encontraron resultados, recuerde buscar por los nombres del funcionario');
        return;
      }
      this.results = result.map((res) => {
        res['nombreCompleto'] = res['persona']['nombreCompleto'];
        return res;
      });
      if (this.results.length > this.rows) {
        this.paginate_results = this.results.slice(0, this.rows);
      } else {
        this.paginate_results = this.results;
      }
    });
  }
  paginate(event: LazyLoadEvent) {
    if (event.first + this.rows <= this.results.length) {
      this.paginate_results = this.results.slice(event.first, event.first + this.rows);
    } else {
      this.paginate_results = this.results.slice(event.first, this.results.length + 1);
    }

  }

  /**
   * Example to get data by environment, defined in asserts/env/environment.
   */
  async showEnvData() {
    const envAppConfig = await this.envAppConfigService.appConfig();
    console.log('Variable por ambiente, TIPO GENERO:', envAppConfig.CATALOGOS.CODIGO_TIPO_GENERO);
    console.log('has role HOME', this.keycloakService.isUserInRole('HOME', envAppConfig.security.clientId));
  }

  messageSuccess() {
    this.messageService.success('msj success');
  }

  messageInfo() {
    this.messageService.info('msj info');
  }

  messageWarning() {
    this.messageService.warning('msj warning');
  }

  messageError() {
    this.messageService.error('msj error', 'msj error 2');
  }

  formValid() {
    this.messageService.info('Form is valid');
  }

  printModel(){
    console.log("processName", this.processName);
  }
}
