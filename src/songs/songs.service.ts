import { Injectable } from '@nestjs/common';
import type { Song } from "../types/songs";

@Injectable()
export class SongsService {
    private readonly songs: Array<Song> = []

    createSong(song: Song): Array<Song> {
        this.songs.push(song)
        return this.songs
    }

    getSongs(): Array<Song> {
        return this.songs
    }

    getSongById(id: number): Song | undefined {
        return this.songs.find(song => song.id === id)
    }
}
