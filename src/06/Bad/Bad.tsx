import { Button } from './Button.tsx';

export const Bad = () => {
    return (
        <div className='flex space-x-10'>
            <Button text='Go Home' role='forward' color='red' />
            <Button text='Go Back' role='back' />
        </div>
    );
};

export default Bad;
