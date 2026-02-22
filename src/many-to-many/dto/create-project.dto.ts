import { IsArray, IsOptional, IsString } from "class-validator";

export class CreateProjectDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    developers?: string[];
}
