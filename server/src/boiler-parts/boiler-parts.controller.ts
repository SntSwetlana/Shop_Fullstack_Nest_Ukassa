/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { Query, UseGuards } from '@nestjs/common/decorators';
import { BoilerPartsService } from './boiler-parts.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('boiler-parts')
export class BoilerPartsController {
    constructor(private readonly boilerPartsService: BoilerPartsService) {}
    @UseGuards(AuthenticatedGuard)
    @Get()
    paginateAndFilter(@Query() query) {
        return this.boilerPartsService.paginateAndFilter(query);
    }
}

