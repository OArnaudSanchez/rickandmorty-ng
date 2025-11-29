export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';

export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface CharacterReference{
    name: string;
    url: string;
}

export interface Character{
    id: number;
    name: string;
    status: CharacterStatus;
    species: string;
    type: string;
    gender: CharacterGender;
    origin: CharacterReference,
    location: CharacterReference,
    image: string;
    episodes: string[],
    url: string;
    created: string;
}