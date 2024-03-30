
import { Input } from "../../../../Components/Common";
import { SideFilterModel } from "./SideFilter.model";
import './SideFilter.scss';

const SideFilter = ({ onFilterChange }: SideFilterModel) => {
    return (
        <div className="side-filter">
            <h3 className="side-filter__title">Filter</h3>
            <div className="side-filter__inputs">
                <Input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => onFilterChange('username', e.target.value)}
                />
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={(e) => onFilterChange('name', e.target.value)}
                />
                <Input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => onFilterChange('email', e.target.value)}
                />
                <Input
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={(e) => onFilterChange('address.city', e.target.value)}
                />
                <Input
                    type="text"
                    name="zipcode"
                    placeholder="Zipcode"
                    onChange={(e) => onFilterChange('address.zipcode', e.target.value)}
                />
            </div>
        </div>
    );
};

export default SideFilter;
