import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CardInfoFieldComponent } from "src/app/features/shared/components/card/card-info-field/card-info-field.component";
import { CardComponent } from "src/app/features/shared/components/card/card.component";
import { MoreDetailsComponent } from 'src/app/features/shared/more-details/more-details.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { EpisodeService } from '../../services/episode.service';

@Component({
  selector: 'episode-page',
  imports: [
    ContainerComponent,
    DatePipe,
    MoreDetailsComponent,
    CardComponent,
    CardInfoFieldComponent
],
  templateUrl: './episode-page.component.html',
  styleUrl: './episode-page.component.css',
})
export class EpisodePageComponent {
  // TODO: These page must be in plural
  private readonly episodeService = inject(EpisodeService);
  episodes = this.episodeService.episodes;
}
