export class CreateCategoryDto {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly type: string;
  readonly parentCategory: string;
  readonly description: string;
  readonly image: string;
  readonly products: number;
}
