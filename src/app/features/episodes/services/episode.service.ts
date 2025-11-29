import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
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
      .pipe(
        map(({ results }) => EpisodeMapper.mapEpisodes(results)),
        tap(episodes => this.episodes.set(episodes)),
        catchError((error) => throwError(() => new Error(error)))
      ).subscribe();
  }

  getEpisode(episodeId: string): Observable<Episode>{
    return this.httpClient.get<EpisodeResponse>(`${environment.API_BASE_URL}/${environment.EPISODES_PATH}/${episodeId}`)
    .pipe(
      map(episode => EpisodeMapper.mapEpisode(episode)),
      catchError((error) => throwError(() => new Error(error)))
    );
  }
}
