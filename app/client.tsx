/// <reference types="vinxi/types/client" />
import { hydrateRoot } from 'react-dom/client';
import { StartClient } from '@tanstack/react-start';
import { createRouter } from './router';

const router = createRouter();

// @ts-expect-error - Client-only: document is available at runtime in browser
hydrateRoot(document, <StartClient router={router} />);
