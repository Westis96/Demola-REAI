'use client';

import { Provider } from 'jotai';
import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  );
}