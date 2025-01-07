import Product from './products';
import Brand from './brands';
import Size from './size';
import Category from './categories';

// Relaciones
Product.belongsTo(Brand, { foreignKey: 'brand_id' });
Brand.hasMany(Product, { foreignKey: 'brand_id' });

Product.belongsTo(Size, { foreignKey: 'size_id' });
Size.hasMany(Product, { foreignKey: 'size_id' });

Product.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Product, { foreignKey: 'category_id' });

export { Product, Brand, Size };
