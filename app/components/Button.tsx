'use client'; // Indicates that this file is meant for client-side execution.

// Importing necessary type from react-icons
import { IconType } from "react-icons";

// Props interface for Button component
interface ButtonProps {
  label: string; // Label for the button
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // Function to handle button click event
  disabled?: boolean; // Optional prop to disable the button
  outline?: boolean; // Optional prop to render button with outline style
  small?: boolean; // Optional prop to render a smaller sized button
  icon?: IconType; // Optional prop for an icon to be displayed alongside the button label
}

// Functional component for Button
const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  disabled, 
  outline,
  small,
  icon: Icon, // Destructuring icon prop
}) => {
  // Rendering JSX for Button
  return ( 
    <button
      disabled={disabled} // Setting button disabled state
      onClick={onClick} // Attaching click event handler
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full
        ${outline ? 'bg-white' : 'bg-rose-500'} // Conditional background color
        ${outline ? 'border-black' : 'border-rose-500'} // Conditional border color
        ${outline ? 'text-black' : 'text-white'} // Conditional text color
        ${small ? 'text-sm' : 'text-md'} // Conditional font size
        ${small ? 'py-1' : 'py-3'} // Conditional padding
        ${small ? 'font-light' : 'font-semibold'} // Conditional font weight
        ${small ? 'border-[1px]' : 'border-2'} // Conditional border width
      `}
    >
      {/* Rendering icon if provided */}
      {Icon && (
        <Icon
          size={24}
          className="absolute left-4 top-3" // Positioning icon
        />
      )}
      {label} {/* Rendering button label */}
    </button>
  );
}

// Exporting the Button component
export default Button;
