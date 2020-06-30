import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';

import { Area } from 'src/app/models/area.model';
import { AreaService } from 'src/app/services/area.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete',
  templateUrl: 'delete.component.html'
})
export class DeleteComponent implements OnInit {

  area: Area = new Area();

  constructor(
    private areaService: AreaService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) {
    this.area = this.route.snapshot.data['area'];
  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  delete() {
    this.areaService.delete(this.area.id);
    let toastr = this.toastrService.success('Sucesso', 'Área excluida com sucesso!', {
      progressBar: true
    });
    if (toastr) {
      toastr.onHidden.subscribe(() => {
        this.router.navigate(['/list']);
      });
    }
  }

}
