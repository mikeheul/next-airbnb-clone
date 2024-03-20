"use client"; // Indicates that this file is meant for client-side execution.

import axios from 'axios'; // Importing the axios library for making HTTP requests
import { AiFillGithub } from 'react-icons/ai'; // Importing the AiFillGithub icon from react-icons library
import { FcGoogle } from 'react-icons/fc'; // Importing the FcGoogle icon from react-icons library
import { useCallback, useState } from 'react'; // Importing useCallback and useState hooks from React
import { // Importing necessary components and functions from react-hook-form
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';

import useRegisterModal from '../hooks/useRegisterModal'; // Importing the custom hook useRegisterModal from '../hooks/useRegisterModal'
import Modal from './Modal';

// Functional component for RegisterModal
const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const { // Destructuring properties from the useForm hook
        register, // Function to register form inputs
        handleSubmit, // Function to handle form submission
        formState: { // Destructuring formState object
            errors, // Object containing validation errors
        }
    } = useForm<FieldValues>({ // Invoking the useForm hook with generic type FieldValues
        defaultValues: { // Setting default values for form fields
            name: '', // Default value for name field
            email: '', // Default value for email field
            password: '' // Default value for password field
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => { // Defining onSubmit function with type SubmitHandler<FieldValues>
        setIsLoading(true); // Setting isLoading state to true
        axios.post('/api/register', data) // Making a POST request to '/api/register' endpoint with form data
            .then(() => { // Handling successful response
                registerModal.onClose(); // Closing the register modal using registerModal.onClose()
            })
            .catch((error) => { // Handling errors
                console.log(error); // Logging the error to console
            })
            .finally(() => { // Executing finally block, regardless of success or failure
                setIsLoading(false); // Setting isLoading state to false
            });
    }

    return ( 
        <Modal 
            disabled={isLoading} // Prop to disable the modal while isLoading is true
            isOpen={registerModal.isOpen} // Prop to control the visibility of the modal
            title='Register' // Prop for the title of the modal
            actionLabel='Continue' // Prop for the label of the action button
            onClose={registerModal.onClose} // Prop for the function to close the modal
            onSubmit={handleSubmit(onSubmit)} // Prop for the function to handle form submission
        />
    );
}

export default RegisterModal; // Exporting the RegisterModal component as default
