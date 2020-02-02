interface PopperOptions {
    /**
     * Popper.js modifiers
     */
    modifiers?: Object;
    /**
     * toggle the popper functionality on/off
     */
    enabled?: boolean;
    /**
     * The popper element placement relative to the reference element
     */
    placement?: string;
    /**
     * use fixed positioning
     */
    positionFixed?: boolean;
    /**
     * have Popper listen on window resize events to reposition the element
     */
    eventsEnabled?: boolean;
}

interface PopperState {
    placement: string;
    scheduleUpdate: () => void;
    outOfBoundaries: boolean;
    styles: Object;
    arrowStyles: Object;
}

/**
 * Position an element relative some reference element using Popper.js
 *
 * @param referenceElement The element
 */
declare function usePopper(
    referenceElement: HTMLElement,
    popperElement: HTMLElement,
    options?: PopperOptions,
): PopperState;

export default usePopper;
