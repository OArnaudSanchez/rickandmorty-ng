import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ContainerComponent } from "../../../shared/components/container/container.component";
import { StatusBadgeComponent } from "../../components/status-badge/status-badge.component";
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'character-page',
  imports: [ContainerComponent, StatusBadgeComponent, TitleCasePipe, RouterLink],
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.css'
})
export class CharacterPageComponent {

  private readonly characterService = inject(CharacterService);
  characters = this.characterService.characters;

  //TODO: Implement infinite Scroll or use pagination

}
