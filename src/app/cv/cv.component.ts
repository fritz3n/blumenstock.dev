import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CvEntryComponent } from '../cv-entry/cv-entry.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, CvEntryComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent {}
