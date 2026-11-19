/**
 * Mounts the whole App for the route smoke test.
 *
 * App owns its own BrowserRouter, so the path is driven through the jsdom
 * history rather than by wrapping it in a second router — nesting routers
 * throws, and stripping the app's router would stop testing the shipped tree.
 */
import React from 'react';
import { App } from '../src/App';

export function Smoke() {
  return <App />;
}

export const goTo = (path: string) => {
  window.history.pushState({}, '', path);
};
