import db from './connection'; // Conexión a la base de datos
import Product from '../models/products';
import Brand from '../models/brands';
import Size from '../models/size';
import Category from '../models/categories';
import Order from '../models/orders';

// Establecer relaciones
Product.belongsTo(Brand, { foreignKey: 'brand_id' });
Product.belongsTo(Size, { foreignKey: 'size_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

Brand.hasMany(Product, { foreignKey: 'brand_id' });
Size.hasMany(Product, { foreignKey: 'size_id' });
Category.hasMany(Product, { foreignKey: 'category_id' });

// Sincronizar base de datos (opcional, en modo desarrollo)
db.sync({ force: false })
  .then(() => console.log('Database synchronized'))
  .catch((error) => console.error('Error synchronizing database', error));

// Exportar modelos y conexión
export { Product, Brand, Size, Category };
export default db;
