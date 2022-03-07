import { Component, OnInit } from '@angular/core';
import {HandleApiService} from "../../../services/handle-api.service";

interface Solicitud {
  apellido: string,
  cedula: string,
  email: string,
  estado_afiliacion: string,
  id: number,
  nombre: string,
  telefono: string,
  tipo_afiliacion: string,
  fecha: string,

}

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {

  solicitudes: Solicitud[] = []

  constructor(
    private handle: HandleApiService
  ) { }

  ngOnInit(): void {
    this.handle.getSolicitudes().subscribe((data:any) =>{
      console.log(data)
      this.solicitudes = data;
    })
  }

  aprobar(id: number) {
    const data = {
      id: id,
      option: true
    }
    this.handle.optionSolicitud(data).subscribe((data:any) => {
      this.ngOnInit()
    })

  }
  denegar(id: number) {
    const data = {
      id: id,
      option: false
    }
    this.handle.optionSolicitud(data).subscribe((data:any) => {
      this.ngOnInit()
    })

  }



}
