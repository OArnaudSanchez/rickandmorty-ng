import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Character } from '../../models/character.model';
import { StatusBadgeComponent } from '../status-badge/status-badge.component';

@Component({
  selector: 'character-detail',
  imports: [StatusBadgeComponent, TitleCasePipe],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent {

  character = input.required<Character>();
}
