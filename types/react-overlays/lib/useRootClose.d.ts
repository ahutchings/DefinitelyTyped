/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param ref The element boundary
 */
declare function useRootClose(
    ref: React.Ref<HTMLElement> | HTMLElement,
    onRootClose: (event: React.SyntheticEvent<HTMLElement>) => void,
    options?: useRootClose.UseRootCloseOptions,
): void;

declare namespace useRootClose {
    interface UseRootCloseOptions {
        /**
         * The DOM event name (click, mousedown, etc) to attach listeners on
         */
        clickTrigger?: 'click' | 'mousedown';
        disabled: boolean;
    }
}

export = useRootClose;
