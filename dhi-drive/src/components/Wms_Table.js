import React from 'react'
import {Link} from 'react-router-dom'
import MyTable from './Table/MyTable'


function Wms_Table() {
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
                                        <Link to="/Water_map">
                                        <div class="w-full text-white  flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start ">
                                            <span class="mx-2 text-sm font-normal">
                                                Map
                                            </span>
                                        </div>
                                        </Link>
                                    </div>

                                    <div>
                                        
                                        <div class="w-full text-white  flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-primary">
                                            <span class="mx-2 text-sm font-normal">
                                                Table
                                            </span>
                                        </div>
                                        
                                    </div>

                                </nav>
                             {/******************************* End of Side Nav section **********************************/}
                        </div>
                    </div>
                    
                    {/* Main Body */}
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
                        <div class="overflow-auto bg-gray-100 h-screen pb-24 px-4 md:px-6">
                        <h1 class="text-4xl font-semibold text-gray-800 my-4  ">
                                Water Information  
                        </h1>
                            <MyTable/>
                        </div>
                    </div>
                    {/* Main Body Ends */}
                </div>
            </main>  
        </div>    
    )
}

export default Wms_Table
