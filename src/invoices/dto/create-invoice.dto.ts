export class CreateInvoiceDto {
  readonly id: string;
  readonly name: string;
  readonly userName: string;
  readonly avatar: string;
  readonly email: string;
  readonly dueDate: Date;
  readonly amount: number;
  readonly status: string;
  readonly createdAt: Date;
}
