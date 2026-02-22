import { IsMongoId, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAccountDto {
    @IsNotEmpty()
    @IsMongoId()
    employeeId: string;

    @IsNotEmpty()
    @IsNumber()
    baseSalary: number;

    @IsNotEmpty()
    @IsNumber()
    hra: number;

    @IsNotEmpty()
    @IsNumber()
    da: number;

    @IsNotEmpty()
    @IsNumber()
    pf: number;

    @IsNotEmpty()
    @IsNumber()
    specialAllowance: number;
}
