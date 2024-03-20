"use client"; // Indicates that this file is meant for client-side execution.

// Props interface for Container component
interface ContainerProps {
    children: React.ReactNode; // Prop for children elements
}

// Functional component for Container
const Container: React.FC<ContainerProps> = ({ 
    children 
}) => {
    // Rendering JSX for Container
    return ( 
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4"> {/* Styling for maximum width and horizontal margin */}
            { children } {/* Rendering children elements */}
        </div>
    );
}

// Exporting the Container component
export default Container;
