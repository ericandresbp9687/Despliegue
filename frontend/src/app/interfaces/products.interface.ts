export interface Product {
    id?: number;
    name: string;
    description: string;
    price: number,
    stock: number,
    discount_price:number
    brand: { name: string };
    size: { size: string };
    category: { name: string };
}
