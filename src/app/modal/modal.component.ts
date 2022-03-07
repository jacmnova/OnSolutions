import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HandleApiService} from "../../../services/handle-api.service";
import {AlertsService} from "../../../services/alerts.service";
import {Router} from "@angular/router";
import {LoginServiceService} from "../../../services/security/login-service.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  loginForm: FormGroup;
  constructor(public modalRef: MdbModalRef<ModalComponent>,
              private formBuilder: FormBuilder,
              private handle: HandleApiService,
              private alerts: AlertsService,
              private route: Router,
              private log: LoginServiceService) {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      clave: ['', Validators.required],
    });

  }

  ngOnInit(): void {
  }

  login() {
    this.handle.Loggin(this.loginForm.value).subscribe((data:any)=> {
      console.log(data)
      if (data === false){
        this.modalRef.close()
        this.alerts.showAlerts('Usuario o clave no coinciden', 'error')
      } else {
        this.modalRef.close()
        this.log.setDataUser(data)
        const info = this.log.getDataUser()
        if (info.tipo_usuario === "CLIENT") {
          this.route.navigateByUrl('/dashboard')
        }
        if (info.tipo_usuario === "ADMIN") {
          this.route.navigateByUrl('/dashboard-admin')
        }
      }
    })
  }

}
