import { Controller, Get } from '@nestjs/common';
import { SongsService } from './songs.service';
import { Song } from 'src/types/songs';

@Controller('songs')
export class SongsController {

    constructor(private readonly songService: SongsService) { }

    @Get()
    getSongs(): Array<Song> {
        return this.songService.getSongs()
    }

    @Get("/:id")
    getSongById(id: string): Song | undefined {
        return this.songService.getSongById(id)
    }
}
