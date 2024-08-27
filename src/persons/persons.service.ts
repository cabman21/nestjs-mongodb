import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePersonDto } from "./dto/create-person.dto";
import { UpdatePersonDto } from "./dto/update-person.dto";
import { Person } from "./schemas/person.schema";

@Injectable()
export class PersonsService {
  constructor(@InjectModel(Person.name) private readonly personModel: Model<Person>) {}

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    const createdPerson = await this.personModel.create(createPersonDto);
    return createdPerson;
  }

  async findAll(): Promise<Person[]> {
    return this.personModel.find().exec();
  }

  async findOne(id: string): Promise<Person> {
    return this.personModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {
    const updatedPerson = await this.personModel
      .findOneAndUpdate({ _id: id }, updatePersonDto)
      .exec();
    return updatedPerson;
  }

  async delete(id: string) {
    const deletedPerson = await this.personModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedPerson;
  }
}
