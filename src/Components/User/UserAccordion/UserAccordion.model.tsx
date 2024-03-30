import { User } from "../../../Models/UserModel";
export interface UserAccordionProps {
    user: User;
    index: number;
    handleMoveItem: (index: number) => void;
    isOpen: boolean;
    onToggle: () => void;
    className?: string;
}