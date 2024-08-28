import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { Category } from "./schemas/category.schema";

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category.name) private readonly categoryModel: Model<Category>) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createdCategory = await this.categoryModel.create(createCategoryDto);
    return createdCategory;
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async findOne(id: string): Promise<Category> {
    return this.categoryModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const updatedCategory = await this.categoryModel
      .findOneAndUpdate({ _id: id }, updateCategoryDto)
      .exec();
    return updatedCategory;
  }

  async delete(id: string) {
    const deletedCategory = await this.categoryModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedCategory;
  }
}
