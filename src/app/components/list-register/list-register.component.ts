import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-register',
  templateUrl: 'list-register.component.html'
})
export class ListRegisterComponent implements OnInit {

  @Input() list: any = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
