import { IProduct } from './Bad.tsx';

interface IThumbnailProps {
    product: IProduct;
}

export function Thumbnail(props: IThumbnailProps) {
    const { product } = props;

    return <img className='p-8 rounded-t-lg h-48' src={product.image} alt='product image' />;
}
