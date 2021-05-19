import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { constants } from '../../constants/constants';
import { BaseService } from '@ec.com.kruger/kng-components';

@Injectable({
  providedIn: 'root'
})
export class CorpService extends BaseService {

  /**
       * Metodo constructor de la clase.
       * @param http          Corresponde a la peticion http.
       */
  constructor(
    protected http: HttpClient,
  ) {
    super(http);
    this.baseUrl = '/datosCorporativo';
  }

  getUsersByCode(obj: any): Observable<any> {
    return this.post(`${constants.external_controller.official}${constants.external_services.getUsersByCode}`, obj);
  }

}
