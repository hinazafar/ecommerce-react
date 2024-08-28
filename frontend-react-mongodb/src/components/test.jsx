import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/userSlice";
import { useState } from "react";
import Cart from "./product/Cart";

const test = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(signOut());
    navigate("/sign-in");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">BrandName</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Cloth</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Shoes</a>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Sign In</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sign Up</a>
          </li>
          
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
            <li><a class="dropdown-item" href="#">My Account</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Cart Items
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Item 1</a></li>
              <li><a className="dropdown-item" href="#">Item 2</a></li>
              <li><a className="dropdown-item" href="#">Item 3</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Checkout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default test;
