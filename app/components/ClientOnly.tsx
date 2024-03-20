"use client"; // Indicates that this file is meant for client-side execution.

// Importing necessary hooks from React
import { useState, useEffect } from "react"; // Importing useState and useEffect hooks

// Props interface for ClientOnly component
interface ClientOnlyProps {
    children: React.ReactNode; // Prop for children elements
} 

// Functional component for ClientOnly
const ClientOnly: React.FC<ClientOnlyProps> = ({ 
    children 
}) => {
    // State to track whether component has mounted
    const [hasMounted, setHasMounted] = useState(false); // Initializing state with useState hook

    // Effect to set hasMounted to true after component has mounted
    useEffect(() => {
        setHasMounted(true); // Setting hasMounted to true when component mounts
    }, []); // Empty dependency array ensures effect runs only once after initial render

    // If component has not yet mounted, return null
    if(!hasMounted) {
        return null;
    }

    // If component has mounted, render children
    return ( 
        <>
            {children} {/* Rendering children elements */}
        </>
    );
}

// Exporting the ClientOnly component
export default ClientOnly;
