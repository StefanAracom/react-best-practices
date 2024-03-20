import { FC } from 'react';
import { ContextA, ContextB, ContextC, ContextD, ContextE, ContextF } from './context';

export const Bad: FC = () => {
    return (
        <ContextA.Provider value={false}>
            <ContextB.Provider value={1}>
                <ContextC.Provider value='Hello'>
                    <ContextD.Provider value={false}>
                        <ContextE.Provider value={2}>
                            <ContextF.Provider value='World' />
                        </ContextE.Provider>
                    </ContextD.Provider>
                </ContextC.Provider>
            </ContextB.Provider>
        </ContextA.Provider>
    );
};
