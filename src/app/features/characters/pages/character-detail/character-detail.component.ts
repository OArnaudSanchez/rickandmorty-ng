import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardInfoFieldComponent } from "src/app/features/shared/components/card/card-info-field/card-info-field.component";
import { ContainerComponent } from 'src/app/features/shared/components/container/container.component';
import { DetailContainerComponent } from "src/app/features/shared/components/container/detail-container/detail-container.component";
import { RelatedItemsComponent } from "src/app/features/shared/components/related-items/related-items.component";
import { StatusBadgeComponent } from '../../components/status-badge/status-badge.component';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'character-detail',
  imports: [
    ContainerComponent,
    StatusBadgeComponent,
    DatePipe,
    RelatedItemsComponent,
    DetailContainerComponent,
    CardInfoFieldComponent
],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css',
})
export class CharacterDetailComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly characterService = inject(CharacterService);

  protected characterId = this.activatedRoute.snapshot.paramMap.get('id') ?? '';

  //TODO: Refactor using RxResource
  character = signal<Character | null>(null);

  ngOnInit(): void {
    this.characterService.getCharacter(this.characterId).subscribe({
      next: (character) => {
        this.character.set(character);
      },
    });
  }

  get episodesLength(){
    return this.character()?.episodes.length ?? 0;
  }
}
