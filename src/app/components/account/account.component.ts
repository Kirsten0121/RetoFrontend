import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  template: `
  <ul>
    <li *ngFor="let item of items | async">
       {{ item | json }}
    </li>
  </ul>
  `,
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
 items: Observable<any[]>;
   constructor(db: AngularFireDatabase) {
     this.items = db.list('Accounts').valueChanges();
  }
  ngOnInit(): void {
  }

}
