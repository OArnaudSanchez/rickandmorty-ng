import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Character } from '../../models/character.model';
import { StatusBadgeComponent } from '../status-badge/status-badge.component';

@Component({
  selector: 'character-primary-info',
  imports: [StatusBadgeComponent, TitleCasePipe],
  templateUrl: './character-primary-info.component.html',
  styleUrl: './character-primary-info.component.css'
})
export class CharacterPrimaryInfoComponent {

  character = input.required<Character>();
}
