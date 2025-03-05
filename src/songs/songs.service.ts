import { Injectable } from '@nestjs/common';
import type { Song } from "../types/songs";

@Injectable()
export class SongsService {
    getSongs(): Array<Song> {
        return [] as Song[]
    }

    getSongById(id: string): Song | undefined {
        return
    }
}
