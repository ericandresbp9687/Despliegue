export interface Order {
    id?: number;
    customer: {name:String};
    order_date: Date;
    total_price: number;
    status: Selection; // EN LA BASE DE DATOS ESTE ATRIBUTO ES UN ENUM
}
