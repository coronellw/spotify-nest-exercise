import { ArrayMinSize, IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";

export class CreateSongDTO {

    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsArray()
    @IsString({each: true})
    @ArrayMinSize(1)
    readonly author: string[]

    @IsNotEmpty()
    @IsDateString()
    readonly releaseDate: Date

    @IsNotEmpty()
    @IsMilitaryTime()
    readonly duration: Date
}