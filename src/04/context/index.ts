import React from 'react';
import { createContext } from 'use-context-selector';

export const ContextA = React.createContext(true);

export const ContextB = React.createContext(0);

export const ContextC = React.createContext('');

export const ContextD = React.createContext(true);

export const ContextE = React.createContext(0);

export const ContextF = React.createContext('');

export const AggregatedContext = createContext({
    a: true,
    b: 0,
    c: '',
    d: true,
    e: 0,
    f: '',
});
