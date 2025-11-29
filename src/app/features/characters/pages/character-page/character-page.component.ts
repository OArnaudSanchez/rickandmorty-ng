import { Component, inject } from '@angular/core';
import { CardInfoFieldComponent } from "src/app/features/shared/components/card/card-info-field/card-info-field.component";
import { CardComponent } from "src/app/features/shared/components/card/card.component";
import { MoreDetailsComponent } from 'src/app/features/shared/more-details/more-details.component';
import { HideUrlPipe } from 'src/app/features/shared/pipes/hide-url.pipe';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { StatusBadgeComponent } from '../../components/status-badge/status-badge.component';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'character-page',
  imports: [
    ContainerComponent,
    StatusBadgeComponent,
    MoreDetailsComponent,
    CardComponent,
    CardInfoFieldComponent,
    HideUrlPipe
],
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.css',
})
export class CharacterPageComponent {
  private readonly characterService = inject(CharacterService);
  characters = this.characterService.characters;

  //TODO: Implement infinite Scroll or use pagination
}
