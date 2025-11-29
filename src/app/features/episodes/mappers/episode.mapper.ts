import { EpisodeResponse } from "../models/episode-response.model";
import { Episode } from "../models/episode.model";


export class EpisodeMapper{

    static mapEpisode(episodeResponse: EpisodeResponse) : Episode{
        const { id, name, air_date, episode, characters, url, created } = episodeResponse;

        return {
            id: id,
            name: name,
            airDate: air_date,
            episode: episode,
            characters: characters,
            url: url,
            created: created
        }
    }

    static mapEpisodes(episodesResponse: EpisodeResponse[]) : Episode[] {
        return episodesResponse.map(episode => this.mapEpisode(episode));
    }
}