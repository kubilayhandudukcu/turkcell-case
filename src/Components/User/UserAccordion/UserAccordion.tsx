import { UserAccordionProps } from "./UserAccordion.model";
import Accordion from "../../Common/Accordion/Accordion";
import UserDetail from "../UserDetail/UserDetail";

const UserAccordion: React.FC<UserAccordionProps> = ({ user, index,  isOpen, onToggle,handleMoveItem }) => {
    return (
        <Accordion
            isOpen={isOpen}
            onToggle={onToggle}
            header={(
                <>
                    <span>{user.id}</span>
                    <span>{user.username}</span>
                    <span>{user.name}</span>
                   
                </>
            
            )}
            index={index}
            handleMoveItem={handleMoveItem}
            content={<UserDetail user={user} />}
        />
    );
};

export default UserAccordion;