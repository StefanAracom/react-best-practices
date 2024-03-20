import { useState } from 'react';
import expensiveCalculation from './expensiveCalculation.ts';

const Bad = () => {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(0);

    const total = expensiveCalculation(count);

    return (
        <>
            <span>{total}</span>
            <button onClick={() => setCount(count => count + 1)} />
            <span>{other}</span>
            <button onClick={() => setOther(other => other + 2)} />
        </>
    );
};

export default Bad;
