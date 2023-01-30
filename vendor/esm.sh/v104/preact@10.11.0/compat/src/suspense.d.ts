import { Component, ComponentChild, ComponentChildren } from '../../src/index.d.ts';

//
// Suspense/lazy
// -----------------------------------
export function lazy<T>(loader: () => Promise<{ default: T } | T>): T;

export interface SuspenseProps {
	children?: ComponentChildren;
	fallback: ComponentChildren;
}

export class Suspense extends Component<SuspenseProps> {
	render(): ComponentChild;
}
