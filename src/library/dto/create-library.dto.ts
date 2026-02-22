import { IsArray, IsString } from "class-validator";

export class CreateLibraryDto {
    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsArray()
    @IsString({ each: true })
    books: string[];
}
