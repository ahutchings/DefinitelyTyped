import * as React from 'react';

declare class Portal extends React.Component<PortalProps> {}
export default Portal;

interface PortalProps {
    container?: React.ReactNode | Function;

    onRendered?: Function;
}
export { PortalProps };
