"use client"; // Indicates that this file is meant for client-side execution.

// Importing necessary components
import Container from "../Container"; // Importing Container component
import Logo from "./Logo"; // Importing Logo component
import Search from "./Search"; // Importing Search component
import UserMenu from "./UserMenu"; // Importing UserMenu component

// Functional component for Navbar
const Navbar = () => {
    // Rendering JSX for Navbar
    return ( 
        <nav className="fixed w-full bg-white z-10 shadow-sm"> {/* Navigation bar with fixed position, full width, white background, and shadow */}
            <div className="py-4 border-b-[1px]"> {/* Padding and bottom border */}
                <Container> {/* Wrapping content in a Container component */}
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0"> {/* Flex container with gap between items */}
                        <Logo /> {/* Rendering Logo component */}
                        <Search /> {/* Rendering Search component */}
                        <UserMenu /> {/* Rendering UserMenu component */}
                    </div>
                </Container>
            </div>
        </nav>
    );
}

// Exporting the Navbar component
export default Navbar;
