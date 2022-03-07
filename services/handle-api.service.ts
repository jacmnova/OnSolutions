import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HandleApiService {
  private REST_API_SERVER = environment.API_REST

  constructor(
    private httpClient: HttpClient,
    ) { }

  public enviarSolicitudApi(data: any){
    // this.alertService.startLoading();
    return this.httpClient.post<any>(this.REST_API_SERVER + '/afiliacion', data);
  }

  public Loggin(data: any) {
    return this.httpClient.post<any>(this.REST_API_SERVER + '/login', data);
  }

  public getSolicitudes() {
    return this.httpClient.get<any>(this.REST_API_SERVER + '/afiliacion');
  }

  public optionSolicitud(data: any) {
    return this.httpClient.put<any>(this.REST_API_SERVER+ '/options_afiliacion', data);
  }

}
