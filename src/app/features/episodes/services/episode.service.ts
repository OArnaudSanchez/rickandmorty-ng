import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
import { map, Observable } from 'rxjs';
import { ApiResponse } from 'src/app/core/models/api-response.model';
import { EpisodeMapper } from '../mappers/episode.mapper';
import { EpisodeResponse } from '../models/episode-response.model';
import { Episode } from '../models/episode.model';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  private readonly httpClient = inject(HttpClient);
  episodes = signal<Episode[] | null>(null);

  constructor() {
    this.getEpisodes();
  }

  getEpisodes() {
    this.httpClient
      .get<ApiResponse<EpisodeResponse>>(`${environment.API_BASE_URL}/${environment.EPISODES_PATH}`)
      .subscribe({
        next: ({ results }) => {
          const mappedEpisodes = EpisodeMapper.mapEpisodes(results);
          this.episodes.set(mappedEpisodes);
        },
        // TODO: Handle API errors
      });
  }

  getEpisode(episodeId: string): Observable<Episode>{
    return this.httpClient.get<EpisodeResponse>(`${environment.API_BASE_URL}/${environment.EPISODES_PATH}/${episodeId}`)
    .pipe(
      map(episode => EpisodeMapper.mapEpisode(episode))
    );
  }
}
