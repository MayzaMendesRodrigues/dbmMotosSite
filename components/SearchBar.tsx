"use client";
import {useState} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { SearchManuFacturer } from '.';


const SearchBar = () => {
    const [manufacturer, setManufacturer]= useState("");
    const handleSearch = () => {}
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            
        </div>
    </form>
  )
}

export default SearchBar