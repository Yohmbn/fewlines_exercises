type Product = {
  productName: string;
  quantity: number;
};

function productTransformer<Product>(object : Product) : [string,string|number][]{
  return Object.entries(object)
}
// Leave the line below for tests to work properly.
export { productTransformer };
