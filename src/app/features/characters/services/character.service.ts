import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { ApiResponse } from 'src/app/core/models/api-response.model';
import { CharacterMapper } from '../mappers/character.mapper';
import { CharacterResponse } from '../models/character-response.model';
import { Character } from '../models/character.model';
@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly httpClient = inject(HttpClient);
  characters = signal<Character[] | null>(null);

  constructor() {
    this.getCharacters();
  }

  getCharacters() {
    this.httpClient
      .get<ApiResponse<CharacterResponse>>(`${environment.API_BASE_URL}/${environment.CHARACTERS_PATH}`)
      .pipe(  
        map(({ results }) => CharacterMapper.mapCharacters(results)),
        tap(characters => this.characters.set(characters)),
        catchError((error) => throwError(() => new Error(error))))
      .subscribe();
  }

  getCharacter(characterId: string): Observable<Character>{
    return this.httpClient.get<CharacterResponse>(`${environment.API_BASE_URL}/${environment.CHARACTERS_PATH}/${characterId}`)
    .pipe(
      map((character) => CharacterMapper.mapCharacter(character)),
      catchError((error) => throwError(() => new Error(error)))
    );
  }
}
