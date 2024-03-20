"use client";

// Importing necessary components and hooks
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

// Functional component for UserMenu
const UserMenu = () => {
    // State to manage the open/close state of the menu
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the menu's open/close state
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    // Rendering JSX for UserMenu
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                {/* Airbnb your home */}
                <div
                    onClick={() => {}}
                    className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                    Airbnb your home
                </div>
                {/* Menu icon and Avatar */}
                <div
                    onClick={toggleOpen}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>
            {/* Dropdown menu */}
            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        {/* Menu items */}
                        <>
                            <MenuItem
                                onClick={() => {}}
                                label="Login"
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Sign Up"
                            />
                        </>
                    </div>
                </div>
            )}
        </div>
    );
}

// Exporting the UserMenu component
export default UserMenu;
