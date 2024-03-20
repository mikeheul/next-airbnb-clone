"use client"; // Indicates that this file is meant for client-side execution.

// Importing necessary component
import { BiSearch } from "react-icons/bi"; // Importing BiSearch icon from react-icons

// Functional component for Search bar
const Search = () => {
    // Rendering JSX for Search component
    return ( 
        <div 
            className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer"> {/* Styling for the search bar */}
            <div 
                className="flex flex-row items-center justify-between"> {/* Flex container with items */}
                <div 
                    className="text-sm font-semibold px-6"> {/* Styling for the 'Anywhere' text */}
                    Anywhere
                </div>
                <div 
                    className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center"> {/* Styling for the 'Any Week' text */}
                    Any Week
                </div>
                <div 
                    className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3"> {/* Styling for the search icon and 'Add Guests' text */}
                    <div className="hidden sm:block">Add Guests</div> {/* 'Add Guests' text */}
                    <div className="p-2 bg-rose-500 rounded-full text-white"> {/* Styling for the search icon background */}
                        <BiSearch size={18} /> {/* Rendering the search icon */}
                    </div>
                </div>
            </div>
        </div>
     );
}

// Exporting the Search component
export default Search;
