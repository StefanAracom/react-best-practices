import { FC } from 'react';
import { AggregatedContext } from './context';
import Child from './Child.tsx';

export const Good: FC = () => {
    return (
        <AggregatedContext.Provider
            value={{
                a: false,
                b: 1,
                c: 'Hello',
                d: false,
                e: 2,
                f: 'World',
            }}
        >
            <Child />
        </AggregatedContext.Provider>
    );
};
