import { Component, input } from '@angular/core';
import { CharacterStatus } from '../../models/character.model';

@Component({
  selector: 'character-status-badge',
  imports: [],
  templateUrl: './status-badge.component.html',
  styleUrl: './status-badge.component.css'
})
export class StatusBadgeComponent {

  status = input.required<CharacterStatus>();
  species = input.required<string>();

  get badgeClass(){
    const map: Record<string, string> = {
      Alive: 'text-green-800 dark:bg-green-900 dark:text-green-300',
      Dead: 'text-red-800 dark:bg-red-900 dark:text-red-300',
      unknown: 'text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    };
    return map[this.status()] || map['unknown'];
  }

  get dotClass() {
    const map: Record<string, string> = {
      Alive: 'bg-green-500 animate-pulse',
      Dead: 'bg-red-500',
      unknown: 'bg-gray-400',
    };
    return map[this.status()] || map['unknown'];
  }
}
