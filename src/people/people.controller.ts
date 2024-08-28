import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { PeopleService } from "./people.service";
import { CreatePersonDto } from "./dto/create-person.dto";
import { UpdatePersonDto } from "./dto/update-person.dto";
import { Person } from "./schemas/person.schema";

@Controller("people")
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post()
  async create(@Body() createPersonDto: CreatePersonDto) {
    await this.peopleService.create(createPersonDto);
  }

  @Get()
  async findAll(): Promise<Person[]> {
    return this.peopleService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Person> {
    return this.peopleService.findOne(id);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updatePersonDto: UpdatePersonDto
  ) {
    return this.peopleService.update(id, updatePersonDto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.peopleService.delete(id);
  }
}
