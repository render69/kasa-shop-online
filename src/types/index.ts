
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
  features: string[];
  inStock: boolean;
  bestSeller?: boolean;
  new?: boolean;
}

export type ProductCategory = 
  | "pos-terminals" 
  | "receipt-printers" 
  | "barcode-scanners" 
  | "cash-drawers"
  | "customer-displays"
  | "accessories";

export interface CartItem {
  product: Product;
  quantity: number;
}
