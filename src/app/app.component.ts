import { Component } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li *ngFor="let item of items | async">
       {{ item | json }}
    </li>
  </ul>
  `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'reto1-frontend-bm';
   items: Observable<any[]>;
   constructor(db: AngularFireDatabase) {
     this.items = db.list('Accounts').valueChanges();
  }
}
