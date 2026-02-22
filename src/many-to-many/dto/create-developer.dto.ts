import { IsArray, IsOptional, IsString } from "class-validator";

export class CreateDeveloperDto {
    @IsString()
    name: string;

    @IsString()
    role: string;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    projects?: string[];
}
