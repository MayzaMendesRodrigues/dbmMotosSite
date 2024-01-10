"use client"
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image';
import { SearchManuFacturerProps } from '@/types'
import { useState, Fragment } from 'react';/**permite agrupar uma lista de filhos sem add nos no dom */
import { manufacturers } from '@/constants';/**lista de fabricante */




const SearchManuFacturer = ({manufacturer, setManufacturer}: SearchManuFacturerProps) => {
    const [query, setQuery] = useState("");

    const filteredManuFacturers = 
    query === ""
    ? manufacturers
    : manufacturers.filter((item) => 
        item
        .toLowerCase()
        .replace(/\s+/g,"")
        .includes(query.toLowerCase().replace(/\s+/g, ""))

    );

  return (
    <div className='search-manufacturer'>
        <Combobox value= {manufacturer} onChange={setManufacturer}>
            <div className="relative w-full">


            {/* Botão para o combobox. Clique no ícone para ver o dropdown completo */}

                <Combobox.Button className="absolute top-[14px]">
                    <Image
                    src="/logoHonda.jpg"
                    width={20}
                    height={20}
                    alt='Logo Honda'
                    />
                </Combobox.Button>

                <Combobox.Input
                className="search-manufacturer__input"
                placeholder='Honda...'
                displayValue={(item:string) => item}
                onChange={(event) => setQuery (event.target.value)}
                /> 


                <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={() => setQuery('')}>

                <Combobox.Options 
                className="absolute mt-1 mt-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-black ring-opacity-5 focus:outline-none sm:text-sm " static>
                    {filteredManuFacturers.length === 0 && query !== "" ? (
                        <Combobox.Option
                        value={query}
                        className="search-manufacturer___option"
                         >
                            Create "{query}"
                        </Combobox.Option>

                    ): (
                      filteredManuFacturers.map((item) => (
                            <Combobox.Option
                              key={item}
                              className={({ active }) =>
                                `relative search-manufacturer__option ${
                                  active ? "bg-primary-blue text-white" : "text-gray-900"
                                }`
                              }
                              value={item}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span className={`block truncate ${selected ? "font-medium" : "font-normal"
                                }`}
                                >
                                    {item}
                                  </span>
          
                                  {selected ? (
                                    <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"
                                  }`}
                                    >

                                    </span>
                                  ) : null}
                                </>
                      )}
                            </Combobox.Option>
                          ))
                        )}
                      </Combobox.Options>
                    </Transition>
                  </div>
                </Combobox>
              </div>
            );
          };
          
          export default SearchManuFacturer;