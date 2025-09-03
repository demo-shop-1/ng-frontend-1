export class ProductSingleResponseDTO {
  sku!: string;
  name!: string;
  categoryId!: number;
  description!: string | null;
  unitPrice!: number | null;
  imageUrl!: string | null;
  isActive!: boolean | null;
  unitsInStock!: number | null;
  dateCreated!: Date | null;
  lastUpdated!: Date | null;
}
