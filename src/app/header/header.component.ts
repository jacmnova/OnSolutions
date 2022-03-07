import { Component, OnInit } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  constructor(private modalService: MdbModalService) {}

  ngOnInit(): void {

  }

  openModal() {
    this.modalRef = this.modalService.open(ModalComponent, {
      modalClass: 'modal-dialog-centered'
    })
  }


}
