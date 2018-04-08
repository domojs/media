export type Media = Music | TVShow | Movie;

export interface BaseMedia
{
    id: string;
    path: string;
    type: MediaType;
    tokens: string[];
    name: string;
    length: Date;
    displayName: string;
    cover: string;
}

export interface Music extends BaseMedia
{
    type: 'music';
    artists: string[];
    album: string;
}

export interface Video extends BaseMedia
{
    type: 'video';
    subType: 'tvshow' | 'movie';
    actors: string[];
    overview: string;
    originalName: string;
}

export interface TVShow extends Video
{
    subType: 'tvshow';
    episode: number;
    season: number;
    episodes: number;
    absoluteEpisode: number;
}

export interface Movie extends Video
{
    subType: 'movie';
    episode: number;
}

export interface ScrappedMedia
{
    path: string;
    type: MediaType;
    titles: { name: string, confidence?: number }[];
}

export interface Playlist
{
    [key: number]: Media;
}

export type MediaType = 'video' | 'music';
export type MediaTypes = MediaType[];