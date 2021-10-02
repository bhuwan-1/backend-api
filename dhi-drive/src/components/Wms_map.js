import React from 'react'
import {Link} from "react-router-dom"
import MapDiff from './Map/MapDiff'


function Wms_map() {
    return (
        <div>           
            <main class="bg-white h-screen overflow-hidden relative">
                <div class="flex items-start justify-between">
                    <div class="h-screen hidden lg:block shadow-lg relative w-80">
                        <div class="bg-back h-full ">
                            <div class=" h-20 bg-DHI-LOGO bg-contain bg-no-repeat bg-center"/>
                        {/*********************** Side Nav Component ***************************/}
                                <nav class="mt-6">
                                    <div>
                                        <Link to="/">
                                        <div class="w-full text-white  flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start" >
                                            <span class="mx-2 text-sm font-normal">
                                                Water Dashboard
                                            </span>
                                        </div>
                                        
                                        </Link>
                                    </div>

                                    <div>
                                        <div class="w-full text-white  flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-primary" >
                                            <span class="mx-2 text-sm font-normal">
                                                Map
                                            </span>
                                        </div>
                                        
                                    </div>

                                    <div>
                                        <Link to="/Table">
                                        <div class="w-full text-white  flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start ">
                                            <span class="mx-2 text-sm font-normal">
                                                Table
                                            </span>
                                        </div>
                                        </Link>
                                    </div>


                                    
                                    
                                </nav>
                                
                             {/******************************* End of Side Nav section **********************************/}
                        </div>
                    </div>
                    
                    <div class="flex flex-col w-full md:space-y-4">
                        {/******************************* Header **********************************/}
                        <header class="w-full h-16 z-40 flex items-center justify-between">
                            <div class="block lg:hidden ml-6">
                                <button class="flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md">
                                    <svg width="20" height="20" class="text-gray-400" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                        </path>
                                    </svg>
                                </button>
                            </div>

                            {/* Dash Top Nav bar */}
                            <div class="relative bg-white flex flex-col justify-end h-full px-3 md:w-full">
                                <h1 class="text-center font-bold text-4xl text-gray-800 my-2">Water Management System</h1>    
                            </div>
                        </header>
                        {/******************************* Header End **********************************/}

                        {/******************************* Dash Content  **********************************/}
                        <div className="overflow-auto bg-gray-100 h-screen pb-24 px-4 md:px-6">
                        {/* Provision for Map API */}
                        {/* <iframe title="BHT Map"  width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=thimphu+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>                       */}
                         
                            {/* <Map_New/> */}
                            <MapDiff/>
                            {/* <MyTable/> */}

                         </div>
                        {/************************ Dash content end ************************************/}
                    </div>            
                </div>
            </main>  
        </div>
    )
}

export default Wms_map
