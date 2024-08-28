export class CreateCategoryDto {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly description: string;
  readonly image: string;
  readonly products: number;
}
