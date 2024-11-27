export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  fullDescription: string;
  image: string;
};

export interface ProductDetailsHook {
  id?: string;
  product: Product | undefined;
  handleGoBack: () => void;
}
