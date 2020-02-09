// Type definitions for React Overlays 2.1
// Project: https://github.com/react-bootstrap/react-overlays
// Definitions by: Aaron Beall <https://github.com/aaronbeall>
//                 Vito Samson <https://github.com/vitosamson>
//                 Aaron Dancer <https://github.com/aarondancer>
//                 Andrew Hutchings <https://github.com/ahutchings>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import * as React from 'react';
import Dropdown = require('./Dropdown');
import Modal = require('./Modal');
import Overlay = require('./Overlay');
import Portal = require('./Portal');
import useDropdownMenu = require('./DropdownMenu');
import useDropdownToggle = require('./DropdownToggle');
import useRootClose = require('./useRootClose');

export { Dropdown, Modal, Overlay, Portal, useDropdownMenu, useDropdownToggle, useRootClose };

// these callbacks are used in a few components
export interface TransitionCallbacks {
    /**
     * Callback fired before the Overlay transitions in
     */
    onEnter?(node: HTMLElement): any;

    /**
     * Callback fired as the Overlay begins to transition in
     */
    onEntering?(node: HTMLElement): any;

    /**
     * Callback fired after the Overlay finishes transitioning in
     */
    onEntered?(node: HTMLElement): any;

    /**
     * Callback fired right before the Overlay transitions out
     */
    onExit?(node: HTMLElement): any;

    /**
     * Callback fired as the Overlay begins to transition out
     */
    onExiting?(node: HTMLElement): any;

    /**
     * Callback fired after the Overlay finishes transitioning out
     */
    onExited?(node: HTMLElement): any;
}
