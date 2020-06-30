import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['./nav.components.css']

})
export class NavComponent implements OnInit {

  isNavbarCollapsed: boolean = true;
  userEmail: string = '';

  constructor(
    private afAuth: AngularFireAuth
  ) {  }

  ngOnInit(): void {
    this.afAuth.user.subscribe(data => {
      if (data)
        this.userEmail = data.email;
    });
  }

  logout() {
   //this.afAuth.signOut();
  }

}
