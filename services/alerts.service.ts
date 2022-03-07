import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  private showSwal(title: string, icon: any, key?: string) {
    Swal.fire({
      title,
      text: key,
      icon,
      confirmButtonColor: '#51be95',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cerrar',
    });
  }

  startLoading() {
    Swal.fire({
      allowOutsideClick: false,
      text: 'Guardando',
      icon: 'info',
    });
    Swal.showLoading();
  }

  stopLoading() {
    Swal.close();
  }

  showAlerts(Text: string, icon: 'success' | 'error', key?: string) {
    return this.showSwal(Text, icon, key);
  }
}
