import { CharacterResponse } from '../models/character-response.model';
import {
    Character,
    CharacterGender,
    CharacterStatus,
} from '../models/character.model';

export class CharacterMapper {
  private static readonly STATUS_MAP: Record<string, CharacterStatus> = {
    alive: 'Alive',
    dead: 'Dead',
    unknown: 'unknown',
  };

  private static readonly GENDER_MAP: Record<string, CharacterGender> = {
    male: 'Male',
    female: 'Female',
    genderless: 'Genderless',
    unknown: 'unknown',
  };

  static mapCharacter(character: CharacterResponse): Character {
    const {
      id,
      name,
      status,
      species,
      type,
      gender,
      origin,
      location,
      image,
      episode,
      url,
    } = character;
    return {
      id: id,
      name: name,
      status: this.mapStatus(status),
      species: species,
      type: type,
      gender: this.mapGender(gender),
      origin: origin,
      location: location,
      image: image,
      episodes: episode, 
      url: url,
    };
  }

  static mapCharacters(characters: CharacterResponse[]): Character[] {
    return characters.map((character) => this.mapCharacter(character));
  }

  private static mapStatus(status: string): CharacterStatus {
    const normalized = status?.trim().toLowerCase() ?? 'unknown';
    return this.STATUS_MAP[normalized] ?? 'unknown';
  }

  private static mapGender(gender: string): CharacterGender {
    const lowerCaseGender = gender?.trim()?.toLowerCase();
    return this.GENDER_MAP[lowerCaseGender] ?? 'unknown';
  }
}
