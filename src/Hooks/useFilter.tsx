import { useState, useEffect } from 'react';

const getValueByPath = (object: any, path: string): any => {
  return path.split('.').reduce((acc, part) => acc && acc[part], object);
};

const useFilter = <T extends object>(data: T[], initialFilters: Record<string, string>) => {
  const [filters, setFilters] = useState(initialFilters);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filterKeys = Object.keys(filters);
    const newFilteredData = data.filter(item =>
      filterKeys.every(key => {
        const itemValue = getValueByPath(item, key);
        const filterValue = filters[key].toLowerCase();
        return filterValue ? itemValue.toString().toLowerCase().includes(filterValue) : true;
      })
    );

    setFilteredData(newFilteredData);
  }, [data, filters]);

  const updateFilter = (filterKey: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterKey]: value }));
  };

  return { filteredData, updateFilter };
};

export default useFilter;
