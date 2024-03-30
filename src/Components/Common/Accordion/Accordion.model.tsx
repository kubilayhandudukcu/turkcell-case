import { ReactNode } from "react";

export interface AccordionProps {
    header: ReactNode;
    content: ReactNode;
    isOpen: boolean;
    onToggle: () => void;
    index?: number;
    handleMoveItem?: (index: number) => void;
}