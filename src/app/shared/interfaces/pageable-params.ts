export interface PageableParams {
  page: number;
  size: number;
  filters?: Record<string, string | number | boolean>;
}
