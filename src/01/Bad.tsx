import { useState } from 'react';

const Parent = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => setCount(count + 1);

    const Child = () => {
        return <button onClick={handleClick}>+</button>;
    };

    return (
        <div>
            <Child />
        </div>
    );
};

export default Parent;
