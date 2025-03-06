import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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
    getSongById(@Param(
        'id', 
        new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,})
    ) id: number): Song {
        const song = this.songService.getSongById(id)
        if (!song) {
            throw new HttpException(`Song with id ${id} was not found`, HttpStatus.NOT_FOUND)
        }
        return song
    }

    @Put(':id')
    updateSong(@Param('id') id: string) {
        return `Updating song ${id}`
    }

    @Delete(':id')
    deleteSong(@Param('id') id: string) {
        return `Deleting song ${id}`
    }

    @Get('/error')
    getSongsError() {
        try {
            return this.songService.getSongError("Inentional error message")
        } catch (error) {
            console.log("Inside getSongs method error ", error)
            throw new HttpException(
                `Server Error: ${error}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
                { cause: error })
        }
    }
}
