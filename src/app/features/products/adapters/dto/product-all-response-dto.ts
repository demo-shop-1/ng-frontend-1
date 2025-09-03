import { ProductSingleResponseDTO } from './product-single-response-dto';

export class ProductAllResponseDTO {
  content!: ProductSingleResponseDTO[];
  page!: number;
  totalPages!: number;
  size!: number;
  totalElements!: number;
}
