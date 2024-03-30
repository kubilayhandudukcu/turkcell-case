export interface SideFilterModel {
    onFilterChange: (filterKey: string, value: string) => void;
    className?: string;
}