import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { PersonsService } from "./persons.service";
import { CreatePersonDto } from "./dto/create-person.dto";
import { UpdatePersonDto } from "./dto/update-person.dto";
import { Person } from "./schemas/person.schema";

@Controller("persons")
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Post()
  async create(@Body() createPersonDto: CreatePersonDto) {
    await this.personsService.create(createPersonDto);
  }

  @Get()
  async findAll(): Promise<Person[]> {
    return this.personsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Person> {
    return this.personsService.findOne(id);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updatePersonDto: UpdatePersonDto
  ) {
    return this.personsService.update(id, updatePersonDto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.personsService.delete(id);
  }
}
