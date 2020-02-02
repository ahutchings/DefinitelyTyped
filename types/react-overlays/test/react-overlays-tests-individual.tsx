import * as React from 'react';

import Overlay = require('react-overlays/Overlay');
import useRootClose = require('react-overlays/useRootClose');

import { OverlayFade } from './react-overlays-tests-transition';

interface OverlayTriggerProps extends Overlay.OverlayProps {
    overlay: any;
}

function renderOverlayContent({ props, arrowProps }: Overlay.OverlayRenderProps) {
    return (
        <div ref={props.ref} {...props}>
            <div ref={arrowProps.ref}>Popover content</div>
        </div>
    );
}
class TestOverlay extends React.Component<{}, { open: boolean }> {
    target: HTMLElement | null = null;
    state = { open: false };

    render(): JSX.Element {
        const { open } = this.state;

        return (
            <div>
                <button type="button" ref={ref => (this.target = ref)} onClick={() => this.setState({ open: !open })}>
                    Click me
                </button>

                <Overlay
                    show={open}
                    rootClose={true}
                    target={() => this.target}
                    transition={OverlayFade}
                    onHide={() => this.setState({ open: false })}
                    placement="bottom"
                >
                    {renderOverlayContent}
                </Overlay>
            </div>
        );
    }
}

const TestUseRootClose = () => {
    const ref = React.useRef<HTMLDivElement>();
    const handleRootClose = () => {};

    useRootClose(ref, handleRootClose, {
        clickTrigger: 'click',
        disabled: false,
    });

    return <div ref={ref}>Test</div>;
};
