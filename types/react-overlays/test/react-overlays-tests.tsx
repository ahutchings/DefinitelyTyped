import * as React from 'react';

import { Overlay, useDropdownToggle, useRootClose } from 'react-overlays';
import { OverlayRenderProps } from 'react-overlays/lib/Overlay';

import { OverlayFade } from './react-overlays-tests-transition';

function renderOverlayContent({ props, arrowProps }: OverlayRenderProps) {
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

const TestUseDropdownToggle = () => {
    const [props, { show, toggle }] = useDropdownToggle();

    return <div {...props} onClick={() => toggle(!show)} />;
};

const TestUseRootClose = () => {
    const ref = React.useRef<HTMLDivElement>();
    const handleRootClose = () => {};

    useRootClose(ref, handleRootClose, {
        clickTrigger: 'click',
        disabled: false,
    });

    return <div ref={ref}>Test</div>;
};
