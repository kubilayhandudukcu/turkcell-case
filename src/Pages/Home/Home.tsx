import { useRef } from 'react';
import AccordionListWithSearch from './Components/AccordionWithSearch/AccordionWithSearch';
import { AccordionListWithSearchModel } from '../../Models/AccordionWithSearch.model';
import './Home.scss';


const Home = () => {
  const accordionRef = useRef<AccordionListWithSearchModel>(null);

  const handleGetData = () => {
    const currentData = accordionRef.current?.getData();
    console.log(currentData);
  };

  console.log('home')
  
  return <div className='home-page'>
    <AccordionListWithSearch ref={accordionRef}/>
    <button onClick={handleGetData}>Get Data</button>
  </div>

};

export default Home;