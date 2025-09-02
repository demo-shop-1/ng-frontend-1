export class CategoryModel {
  id!: Number;
  name!: String;
  description!: String;
  isActive!: boolean;
  dateCreated!: Date;
  lastUpdated!: Date | null;
  icon!: string | null;
  translateKey!: string | null;
  url!: string | null;
}
