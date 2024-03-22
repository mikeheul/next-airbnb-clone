"use client"; // Indicates that this file is meant for client-side execution.

// Importing necessary components
import Container from "../Container"; 
import Categories from "./Categories";
import Logo from "./Logo"; 
import Search from "./Search"; 
import UserMenu from "./UserMenu"; 
import { SafeUser } from "@/app/types";

interface NavbarProps {
    currentUser?: SafeUser | null;
}

// Functional component for Navbar
const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {
    // Rendering JSX for Navbar
    return ( 
        <nav className="fixed w-full bg-white z-10 shadow-sm"> 
            <div className="py-4 border-b-[1px]"> 
                <Container> {/* Wrapping content in a Container component */}
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0"> 
                        <Logo /> {/* Rendering Logo component */}
                        <Search /> {/* Rendering Search component */}
                        <UserMenu currentUser={currentUser} /> {/* Rendering UserMenu component */}
                    </div>
                </Container>
            </div>
            <Categories />
        </nav>
    );
}

// Exporting the Navbar component
export default Navbar;
