import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "@environments/environment.development";
import { CharacterMapper } from "../mappers/character.mapper";
import { ApiResponse } from "../models/character-response.model";
import { Character } from "../models/character.model";

@Injectable({
    providedIn: 'root'
})
export class CharacterService{

    private readonly httpClient = inject(HttpClient);
    private readonly apiUrl = environment.API_BASE_URL;

    characters = signal<Character[] | null>(null);

    constructor(){
        this.getCharacters();
    }

    getCharacters(){
        this.httpClient.get<ApiResponse>(`${this.apiUrl}/character`)
            .subscribe({
                next: ({ results }) => {
                    const mappedCharacters = CharacterMapper.mapCharacters(results);
                    console.log(mappedCharacters);
                    this.characters.set(mappedCharacters);
                }
            });
    }



}