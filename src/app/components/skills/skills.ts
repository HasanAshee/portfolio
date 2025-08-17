import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-skills',
  imports: [
    MatListModule,
    MatIconModule
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

}
