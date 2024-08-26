import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateInvoiceDto } from "./dto/create-invoice.dto";
import { UpdateInvoiceDto } from "./dto/update-invoice.dto";
import { Invoice } from "./schemas/invoice.schema";

@Injectable()
export class InvoicesService {
  constructor(@InjectModel(Invoice.name) private readonly invoiceModel: Model<Invoice>) {}

  async create(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    const createdInvoice = await this.invoiceModel.create(createInvoiceDto);
    return createdInvoice;
  }

  async findAll(): Promise<Invoice[]> {
    return this.invoiceModel.find().exec();
  }

  async findOne(id: string): Promise<Invoice> {
    return this.invoiceModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateInvoiceDto: UpdateInvoiceDto) {
    const updatedInvoice = await this.invoiceModel
      .findOneAndUpdate({ _id: id }, updateInvoiceDto)
      .exec();
    return updatedInvoice;
  }

  async delete(id: string) {
    const deletedInvoice = await this.invoiceModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedInvoice;
  }
}
