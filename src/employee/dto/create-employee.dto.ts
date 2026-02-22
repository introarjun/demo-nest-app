import { IsBoolean, IsString } from "class-validator";

export class CreateEmployeeDto {
    @IsString()
    name: string;
    @IsString()
    email: string;
    @IsBoolean()
    isActive: boolean;
}
