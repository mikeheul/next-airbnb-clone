import { create } from 'zustand'; // Importing the create function from zustand library

interface RentModalStore {
    isOpen: boolean; // Indicates whether the register modal is open or not
    onOpen: () => void; 
    onClose: () => void; 
}

// Creating a custom hook named useLoginModal using the create function from zustand
const useRentModal = create<RentModalStore>((set) => ({
    // Initial state for the register modal
    isOpen: false, // Initially, the register modal is closed
    // Defining the onOpen function to set isOpen to true when called
    onOpen: () => set({ isOpen: true }), // This function sets the isOpen state to true
    // Defining the onClose function to set isOpen to false when called
    onClose: () => set({ isOpen: false }), // This function sets the isOpen state to false
}))

// Exporting the useLoginModal hook
export default useRentModal;
