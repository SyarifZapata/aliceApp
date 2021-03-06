import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private _dataService: DataService, private _router: Router) {
    this._dataService.user().subscribe(
      data => {
        this._dataService.setLogginStatus(true);
        // data has picture property
        // @ts-ignore
        if(data.picture){
          // @ts-ignore
          this._dataService.setProfilPicture(data.picture);
        }
        console.log(data);
        },
      error => {
        console.log(error);
        this._router.navigate(['/login']);
      }
    )
  }

  ngOnInit() {
  }

}
