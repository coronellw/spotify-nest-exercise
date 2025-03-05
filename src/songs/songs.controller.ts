import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { Song } from 'src/types/songs';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {

    constructor(private readonly songService: SongsService) { }

    @Get()
    getSongs(): Song[] {
        return this.songService.getSongs()
    }

    @Post()
    createSong(@Body() createSongDTO: CreateSongDTO): Song[] {
        return this.songService.createSong(createSongDTO)
    }

    @Get(':id')
    getSongById(@Param('id') id: string): string{
        return `looking for song ${id}`
    }

    @Put(':id')
    updateSong(@Param('id') id: string) {
        return `Updating song ${id}`
    }

    @Delete(':id')
    deleteSong(@Param('id') id: string) {
        return `Deleting song ${id}`
    }
}
