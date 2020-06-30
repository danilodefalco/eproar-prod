import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app-component.html',
  styleUrls: ['app-component.css'],
  providers: [NgbAccordionConfig]
})

export class AppComponent implements OnInit {

  constructor(
    config: NgbAccordionConfig,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    config.closeOthers = true;
    config.type = 'light';
  }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged(data => {
      if (data) {
        this.router.navigateByUrl('/');
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }
}
