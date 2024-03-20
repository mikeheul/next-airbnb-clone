"use client"; // Indicates that this file is meant for client-side execution.

// Defining the props interface for MenuItem component.
interface MenuItemProps {
    onClick: () => void; // onClick prop expects a function without any parameters and return type void.
    label: string // label prop expects a string value.
}

// Defining the MenuItem functional component.
const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label
}) => {
    return ( 
        // Rendering a div element representing a menu item.
        <div
            onClick={onClick} // Attaching onClick event handler received from props.
            className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"> {/* Styling classes for the menu item. */}
            {label} {/* Displaying the label text of the menu item. */}
        </div>
    );
}

// Exporting the MenuItem component as default.
export default MenuItem;
