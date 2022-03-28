import DataContextProvider from '../../Context/DataContextProvider';
import ServiceContextProvider from '../../Context/ServiceContextProvider';
import CategoryList from './CategoryList';

 const Category = () => {

  return (
      <DataContextProvider>
        <ServiceContextProvider>
        <CategoryList ></CategoryList> 
        </ServiceContextProvider>
       </DataContextProvider>
  );
}
export default Category