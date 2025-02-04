import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv-entry',
  standalone: true,
  imports: [],
  templateUrl: './cv-entry.component.html',
  styleUrl: './cv-entry.component.scss',
  host: { class: 'w-full lg:w-1/2 self-start', '[class.lg:self-end]': 'right' },
})
export class CvEntryComponent {
  @Input() right: boolean = false;
}
