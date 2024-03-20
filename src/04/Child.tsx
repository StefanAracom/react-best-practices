import { FC } from 'react';
import { useContextSelector } from 'use-context-selector';
import { AggregatedContext } from './context';

const Child: FC = () => {
    const b = useContextSelector(AggregatedContext, v => v.b);

    return <span>{b}</span>;
};

export default Child;
