import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIcon
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

}
