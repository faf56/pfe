import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import '@mui/material/styles';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Layout
// Produits
import Insertproduit from "./components/produits/Insertproduit";
import Listproduit from "./components/produits/Listproduit";
import Editproduit from "./components/produits/Editproduit";
// Catégories
import Listcategorie from "./components/categories/Listcategorie";
import Insertcategorie from "./components/categories/Insertcategorie";
import Editcategorie from "./components/categories/Editcategorie";
// Sous-catégories
import Listscategorie from "./components/scategories/Listscategorie";
import Insertscategorie from "./components/scategories/Insertscategorie";
import Editscategorie from "./components/scategories/Editscategorie";
// Marques
import Listmarque from "./components/marques/Listmarque";
import Insertmarque from "./components/marques/Insertmarque"
import Editmarque from "./components/marques/Editmarque";

import ProductCard from "./pages/ProductCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homebody from "./components/Homebody";


function App() {

  return (
    
      <div>
        
         <Router>
          <Header/>
         <Routes>
         <Route path="/" element={<Homebody />} />
          <Route path="produits" element={<Listproduit />} />
          <Route path="produits/add" element={<Insertproduit />} />
          <Route path="produits/edit/:id" element={<Editproduit />} />
            <Route path="categories" element={<Listcategorie />} />
            <Route path="categories/add" element={<Insertcategorie />} />
            <Route path="categories/edit/:id" element={<Editcategorie />} />
            <Route path="scategories" element={<Listscategorie />} />
            <Route path="scategories/add" element={<Insertscategorie />} />
            <Route path="scategories/edit/:id" element={<Editscategorie />} />
            <Route path="marques" element={<Listmarque />} />
            <Route path="marques/add" element={<Insertmarque />} />
            <Route path="marques/edit/:id" element={<Editmarque />} />
            <Route path="/card" element={<ProductCard/>}/>
          </Routes>
          <Footer/>
          </Router>        
        
        
      </div>
      
    
  )
}

export default App
