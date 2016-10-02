import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(private _auth: Auth) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    //console.log(this.profile);
    }

  ngOnInit() { }
}