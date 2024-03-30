import { AccordionProps } from "./Accordion.model";
import './Accordion.scss';

const Accordion = ({ header, content, isOpen, onToggle, index, handleMoveItem }: AccordionProps) => (
  <div className="accordion">
    <div className="accordion__header" onClick={onToggle}>
      {header}
      <div>
        {handleMoveItem && index !== undefined && (
          <button
            onClick={(event) => {
              event.stopPropagation();
              handleMoveItem(index);
            }}
          >
            Up
          </button>
        )}
        <button className={`accordion__toggle ${isOpen ? 'accordion__toggle--active' : ''}`}>
          {isOpen ? '▲' : '▼'}
        </button>
      </div>
    </div>
    {isOpen && (
      <div className="accordion__content">
        {content}
      </div>
    )}
  </div>
);

export default Accordion;
