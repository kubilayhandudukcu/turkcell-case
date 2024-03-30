import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { User } from '../../../../Models/UserModel';
import { AccordionListWithSearchModel } from '../../../../Models/AccordionWithSearch.model';
import { useFetchUsers, useFilter, useItems } from '../../../../Hooks';
import SideFilter from '../SideFilter/SideFilter';
import { UserAccordion } from '../../../../Components/User';
import './AccordionWithSearch.scss';


const AccordionListWithSearch = forwardRef<AccordionListWithSearchModel, {}>((props, ref) => {
    const { data, loading, error } = useFetchUsers();
    const initialFilters = { username: '', name: '', email: '', 'address.city': '', 'address.zipcode': '' };
    const { filteredData, updateFilter } = useFilter<User>(data, initialFilters);
    const { items, setItems, handleMoveItem } = useItems(filteredData);
    const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);

    useEffect(() => {
        setItems(filteredData);
    }, [filteredData,setItems]);

    useImperativeHandle(ref, () => ({
        getData: () => {
            return items;
        },
    }));

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading users</div>;

    return (
        <div className="accordion-with-search">
        <SideFilter onFilterChange={updateFilter} className="accordion-with-search__side-filter" />
        <div className="accordion-with-search__list">
            <div className="accordion-with-search__list-titles">
                <span className="accordion-with-search__list-title">Id</span>
                <span className="accordion-with-search__list-title">Username</span>
                <span className="accordion-with-search__list-title">Name</span>
            </div>
            {items.map((user, index) => (
                <UserAccordion
                    key={user.id}
                    user={user}
                    index={index}
                    handleMoveItem={handleMoveItem}
                    isOpen={openAccordionId === user.id}
                    onToggle={() => setOpenAccordionId(openAccordionId === user.id ? null : user.id)}
                    className="accordion-with-search__accordion"
                />
            ))}
        </div>
    </div>
    
    );
});

export default AccordionListWithSearch;
