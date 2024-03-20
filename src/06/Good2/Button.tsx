import React, { ReactElement } from 'react';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    // types must be unique otherwise it will still work with every other ReactElement
    icon?:
        | ReactElement<typeof HiOutlineArrowNarrowLeft>
        | ReactElement<typeof HiOutlineArrowNarrowRight>;
}

export function Button(props: IButtonProps) {
    const { text, icon } = props;

    return (
        <button
            className='flex items-center font-bold outline-none pt-4 pb-4 pl-8 pr-8 rounded-xl bg-gray-200 text-black'
            {...props}
        >
            {text}
            {icon}
        </button>
    );
}
