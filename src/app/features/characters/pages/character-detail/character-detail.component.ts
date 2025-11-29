import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContainerComponent } from 'src/app/features/shared/components/container/container.component';
import { HideUrlPipe } from 'src/app/features/shared/pipes/hide-url.pipe';
import { StatusBadgeComponent } from '../../components/status-badge/status-badge.component';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'character-detail',
  imports: [
    ContainerComponent,
    StatusBadgeComponent,
    HideUrlPipe,
    RouterLink,
    DatePipe,
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
