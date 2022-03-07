import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HandleApiService} from "../../../services/handle-api.service";
import {AlertsService} from "../../../services/alerts.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contactoForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private handle: HandleApiService,
              private alerts: AlertsService) {
    this.contactoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      tipoAfiliacion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  enviarSolicitud() {
    this.alerts.startLoading()
    if (this.contactoForm.valid){
      console.log(this.contactoForm.value)
      this.handle.enviarSolicitudApi(this.contactoForm.value).subscribe((data: any) => {
        this.alerts.stopLoading()
        this.alerts.showAlerts('Solicitud Enviada','success', 'Cuando aprueben la solicitud le llegara un mail con el acceso a su cuenta')
        this.clear()
      });
    }else{
      this.alerts.startLoading()
      this.alerts.showAlerts('Solicitud No Enviada', 'error', 'Debe Completar todos los datos para realizar la solicitud')
    }


  }

  clear() {
    this.contactoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      tipoAfiliacion: ['', Validators.required],
    });
  }

}
