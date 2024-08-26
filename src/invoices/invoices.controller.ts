import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { InvoicesService } from "./invoices.service";
import { CreateInvoiceDto } from "./dto/create-invoice.dto";
import { UpdateInvoiceDto } from "./dto/update-invoice.dto";
import { Invoice } from "./schemas/invoice.schema";

@Controller("invoices")
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Post()
  async create(@Body() createInvoiceDto: CreateInvoiceDto) {
    await this.invoicesService.create(createInvoiceDto);
  }

  @Get()
  async findAll(): Promise<Invoice[]> {
    return this.invoicesService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Invoice> {
    return this.invoicesService.findOne(id);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updateInvoiceDto: UpdateInvoiceDto
  ) {
    return this.invoicesService.update(id, updateInvoiceDto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.invoicesService.delete(id);
  }
}
