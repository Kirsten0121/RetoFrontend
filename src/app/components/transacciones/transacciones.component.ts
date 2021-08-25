import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transacciones',
  template: `
  <ul>
    <li *ngFor="let item of items | async">
       {{ item | json }}
    </li>
  </ul>
  `,
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})

export class TransaccionesComponent {
 panelOpenState = false;
 items: Observable<any[]>;
   constructor(db: AngularFireDatabase) {
     this.items = db.list('Accounts').valueChanges();
  }
  ngOnInit(): void {
  }

}
