import { Provider, createStore } from 'jotai';
import type { ReactNode } from 'react';

const myStore = createStore()

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={myStore}>
      {children}
    </Provider>
  );
}