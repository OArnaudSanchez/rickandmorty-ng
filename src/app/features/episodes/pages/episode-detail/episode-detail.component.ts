import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContainerComponent } from "src/app/features/shared/components/container/container.component";
import { HideUrlPipe } from 'src/app/features/shared/pipes/hide-url.pipe';
import { Episode } from '../../models/episode.model';
import { EpisodeService } from '../../services/episode.service';

@Component({
  selector: 'app-episode-detail',
  imports: [ContainerComponent, RouterLink, HideUrlPipe, DatePipe],
  templateUrl: './episode-detail.component.html',
  styleUrl: './episode-detail.component.css'
})
export class EpisodeDetailComponent implements OnInit{

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly episodeService = inject(EpisodeService);

  protected episodeId = this.activatedRoute.snapshot.paramMap.get('id') ?? '';

  episode = signal<Episode | null>(null);

  ngOnInit(){
    this.episodeService.getEpisode(this.episodeId)
    .subscribe({
      next: data => {
        this.episode.set(data);
      }
    });
  }

  get episodeName(){
    const { id, name } = this.episode()!;
    return `${id} - ${name}`
  }

  get charactersLength(){
    return this.episode()?.characters.length ?? 0;
  }
}
