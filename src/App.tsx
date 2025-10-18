import { FilterControls } from "./components/FilterControls"
import { Pagination } from "./components/Pagination";
import { ProductCard } from "./components/ProductCard"
import { SearchBar } from "./components/SearchBar"

function App() {
  return (
   <>
          <SearchBar/>
          <FilterControls />
          <ProductCard/>
          <Pagination/>
   </>


  );
}

export default App;
