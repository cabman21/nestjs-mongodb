import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { Category } from "./schemas/category.schema";

@Controller("categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() body, @Body() createCategoryDto: CreateCategoryDto) {
    console.debug('body =>', createCategoryDto);
    await this.categoriesService.create(createCategoryDto);
  }

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Category> {
    console.debug('id =>', id);
    return this.categoriesService.findOne(id);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updateCategoryDto: UpdateCategoryDto
  ) {
    console.debug('id =>', id);
    console.debug('body =>', updateCategoryDto);
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    console.debug('id =>', id);
    return this.categoriesService.delete(id);
  }
}
