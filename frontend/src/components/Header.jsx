import React from "react";
import { FaSearch, FaHeart } from "react-icons/fa";
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import { Button, Chip } from "@mui/material";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
    return (
      <header>
        {/* Bannière promo */}
        <div className="promo-banner">
          <span className="left">
            <i className="fa fa-phone"></i> (+216) 21 298 233
          </span>
          <span className="center">
            <i className="fa-solid fa-truck-fast"></i> Livraison gratuite à partir de 99 DT d'achat
          </span>
        </div>
  
        {/* Barre de navigation principale */}
        <div className="header-main">
          <div className="logo">
            <Link to="/">
            <img
              src="https://res.cloudinary.com/dr09h69he/image/upload/v1741823420/463973226_419263521219478_9170913468475389171_n_vlsgxl.png"
              alt="Logo Perla Coif"
              
            /></Link>
          </div>
  
          {/* Barre de recherche */}
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Rechercher un produit, une marque..." />
          </div>
  
          {/* Icônes à droite */}
          <div className="header-icons">
            <div className="icon-item">
            <Chip
              icon={<PersonIcon />}
              label="Se connecter"
              variant="outlined"
              onClick={handleClick}
            />

              
            </div>
            <FaHeart className="icon" />
            <i className="fa-solid fa-cart-shopping fa-lg"></i>
          </div>
        </div>
  
        {/* Menu principal */}
        <Navbar expand="lg" className="navbar">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="navbar-nav">
              <Nav.Link href="#">Marques</Nav.Link>
              <Nav.Link href="/card">Product</Nav.Link>
  
              {/* Dropdown pour TEINT */}
              <NavDropdown title="Teint" id="nav-dropdown-teint" className="nav-item dropdown">
                <NavDropdown.Item href="#">Fond de teint</NavDropdown.Item>
                <NavDropdown.Item href="#">Blush & Highlighter</NavDropdown.Item>
                <NavDropdown.Item href="#">Pinceaux & Eponges</NavDropdown.Item>
              </NavDropdown>
  
              {/* Dropdown pour YEUX */}
              <NavDropdown title="Yeux" id="nav-dropdown-yeux" className="nav-item dropdown" >
                <NavDropdown.Item href="#">Mascaras</NavDropdown.Item>
                <NavDropdown.Item href="#">Palettes</NavDropdown.Item>
                <NavDropdown.Item href="#">Crayons</NavDropdown.Item>
              </NavDropdown>
  
              {/* Dropdown pour LÈVRES */}
              <NavDropdown title="Lèvres" id="nav-dropdown-levres" className="nav-item dropdown">
                <NavDropdown.Item href="#">Rouges à lèvres</NavDropdown.Item>
                <NavDropdown.Item href="#">Gloss</NavDropdown.Item>
                <NavDropdown.Item href="#">Crayons à lèvres</NavDropdown.Item>
              </NavDropdown>
  
              <NavDropdown title="Ongles" id="nav-dropdown-levres" className="nav-item dropdown">
                <NavDropdown.Item href="#">Verni normal</NavDropdown.Item>
                <NavDropdown.Item href="#">Verni permenent</NavDropdown.Item>
                <NavDropdown.Item href="#">Accesoires ongles</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Cheveux" id="nav-dropdown-levres" className="nav-item dropdown">
                <NavDropdown.Item href="#">Shampoing</NavDropdown.Item>
                <NavDropdown.Item href="#">Soin cheveux</NavDropdown.Item>
                <NavDropdown.Item href="#">Accesoires</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Soin" id="nav-dropdown-levres" className="nav-item dropdown">
                <NavDropdown.Item href="#">Soin visage</NavDropdown.Item>
                <NavDropdown.Item href="#">Soin corps</NavDropdown.Item>
                <NavDropdown.Item href="#">Parfum & brume</NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  };

export default Header;
