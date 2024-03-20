import { FC } from 'react';

type ChildProps = {
    handleClick: () => void;
};

const Child: FC<ChildProps> = ({ handleClick }) => {
    return <button onClick={handleClick}>+</button>;
};

export default Child;
