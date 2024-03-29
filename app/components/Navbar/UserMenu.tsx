"use client";

// Importing necessary components and hooks
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";

import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

import useRegisterModal from "../hooks/useRegisterModal";
import useLoginModal from "../hooks/useLoginModal";
import useRentModal from "../hooks/useRentModal";

import { useRouter } from "next/navigation";
import { SafeUser } from "@/app/types";

interface UserMenuProps {
    currentUser?: SafeUser | null
}

// Functional component for UserMenu
const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {

    const router = useRouter();

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const rentModal = useRentModal()

    // State to manage the open/close state of the menu
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the menu's open/close state
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    const onRent = useCallback(() => {
        if(!currentUser) {
            return loginModal.onOpen();
        }

        // Open Rent Modal
        rentModal.onOpen();

    }, [currentUser, loginModal, rentModal])

    // Rendering JSX for UserMenu
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                {/* Airbnb your home */}
                <div
                    onClick={onRent}
                    className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                    Airbnb your home
                </div>
                {/* Menu icon and Avatar */}
                <div
                    onClick={toggleOpen}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image} />
                    </div>
                </div>
            </div>
            {/* Dropdown menu */}
            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                    {currentUser ? (
                <>
                <MenuItem 
                    label="My trips" 
                    onClick={() => router.push('/trips')}
                />
                <MenuItem 
                    label="My favorites" 
                    onClick={() => router.push('/favorites')}
                />
                <MenuItem 
                    label="My reservations" 
                    onClick={() => router.push('/reservations')}
                />
                <MenuItem 
                    label="My properties" 
                    onClick={() => router.push('/properties')}
                />
                <MenuItem 
                    label="Airbnb your home" 
                    onClick={rentModal.onOpen}
                />
                <hr />
                <MenuItem 
                    label="Logout" 
                    onClick={() => signOut()}
                />
            </>
            ) : (
            <>
                <MenuItem 
                    label="Login" 
                    onClick={loginModal.onOpen}
                />
                <MenuItem 
                    label="Sign up" 
                    onClick={registerModal.onOpen}
                />
                </>
            )}
           
            </div>
        </div>
        )}
    </div>
    );
}

// Exporting the UserMenu component
export default UserMenu;
