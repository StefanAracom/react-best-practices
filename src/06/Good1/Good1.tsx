import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Button } from './Button.tsx';

export function Good1() {
    return (
        <div className='flex space-x-10'>
            <Button text='Go Home' icon={<HiOutlineArrowNarrowRight color='red' />} />
            <Button text='Go Back' icon={<HiOutlineArrowNarrowLeft />} />
        </div>
    );
}
