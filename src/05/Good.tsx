import { IProduct, Product } from './components/Product.tsx';
import { Filter, filterProducts } from './utils/filter.tsx';
import { useProducts } from './hooks/useProducts';
import { useRateFilter } from './hooks/useRateFilter';

export function Good() {
    const { products } = useProducts();

    const { filterRate, handleRating } = useRateFilter();

    return (
        <div className='flex flex-col h-full'>
            <Filter filterRate={filterRate} handleRating={handleRating} />
            <div className='h-full flex flex-wrap justify-center'>
                {filterProducts(products, filterRate).map((product: IProduct) => (
                    <Product product={product} />
                ))}
            </div>
        </div>
    );
}
