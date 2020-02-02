import * as React from 'react';

/**
 * Wires up Dropdown toggle functinality, returning a set a props to attach
 * to the element that functions as the dropdown toggle (generally a button).
 */
declare function useDropdownToggle(): [
    useDropdownToggle.DropdownToggleProps,
    {
        show: boolean;
        toggle(show: boolean): void;
    },
];

declare namespace useDropdownToggle {
    interface DropdownToggleProps {
        ref: (popperNode: HTMLElement | null) => void;
        'aria-haspopup': true;
        'aria-expanded': boolean;
    }
}

export { useDropdownToggle };

declare class DropdownToggle extends React.Component<DropdownToggle.DropdownToggleProps> {}
export default DropdownToggle;

declare namespace DropdownToggle {
    interface DropdownToggleRenderProps {
        show: boolean;
        toggle(show: boolean): void;
        props: {
            ref: (popperNode: HTMLElement | null) => void;
            'aria-haspopup': true;
            'aria-expanded': boolean;
        };
    }

    interface DropdownToggleProps {
        /**
         * A render prop that returns a Toggle element. The `props`
         * argument should spread through to **a component that can accept a ref**. Use
         * the `onToggle` argument to toggle the menu open or closed
         */
        children(renderProps: DropdownToggleRenderProps): React.ReactElement;
    }
}
