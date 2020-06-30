import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/services/area.service';
import { Area } from 'src/app/models/area.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  email: string;
  list: any[] = [];

  constructor(
    private afAuth: AngularFireAuth,
    private areaService: AreaService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();

    this.afAuth.user.subscribe((data) => {
      if (data)
        this.email = data.email;

        this.areaService.getAllByEmail(this.email).subscribe(result => {
          this.list = result.map(a => {
            const data = a.payload.val() as Area;
            const id = a.payload.key;
            const result = { id, ...data };
            return result;
          })
        });
    });

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
