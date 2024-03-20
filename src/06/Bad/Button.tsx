import React from 'react';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    role?: 'back' | 'forward' | 'main' | 'not-found';
    color?: string;
}

export function Button(props: IButtonProps) {
    const { text, role, color } = props;

    return (
        <button
            className='flex items-center font-bold outline-none pt-4 pb-4 pl-8 pr-8 rounded-xl bg-gray-200 text-black'
            {...props}
        >
            {text}
            <div className='m-2'>
                {role === 'forward' && <HiOutlineArrowNarrowRight color={color} />}
                {role === 'back' && <HiOutlineArrowNarrowLeft />}
            </div>
        </button>
    );
}
