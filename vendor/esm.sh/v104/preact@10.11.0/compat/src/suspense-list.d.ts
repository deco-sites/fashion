import { Component, ComponentChild, ComponentChildren } from '../../src/index.d.ts';

//
// SuspenseList
// -----------------------------------

export interface SuspenseListProps {
	children?: ComponentChildren;
	revealOrder?: 'forwards' | 'backwards' | 'together';
}

export class SuspenseList extends Component<SuspenseListProps> {
	render(): ComponentChild;
}
