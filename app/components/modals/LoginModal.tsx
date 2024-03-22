"use client"; // Indicates that this file is meant for client-side execution.

import { signIn } from 'next-auth/react';
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
import useLoginModal from '../hooks/useLoginModal';

import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import toast from 'react-hot-toast';
import Button from '../Button';
import { useRouter } from 'next/navigation';

// Functional component for RegisterModal
const LoginModal = () => {

    const router = useRouter();

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const { // Destructuring properties from the useForm hook
        register, // Function to register form inputs
        handleSubmit, // Function to handle form submission
        formState: { // Destructuring formState object
            errors, // Object containing validation errors
        }
    } = useForm<FieldValues>({ // Invoking the useForm hook with generic type FieldValues
        defaultValues: { // Setting default values for form fields
            email: '', // Default value for email field
            password: '' // Default value for password field
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => { // Defining onSubmit function with type SubmitHandler<FieldValues>
        setIsLoading(true); // Setting isLoading state to true
        
        signIn('credentials', {
            ... data,
            redirect: false
        })
        .then((callback) => {
            setIsLoading(false);
            if(callback?.ok) {
                toast.success("Logged in");
                router.refresh();
                loginModal.onClose();
            }

            if(callback?.error) {
                toast.error(callback.error)
            }
        })
    }

    const toggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal])

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            {/* Heading component */}
            <Heading 
                title='Welcome back' // Title for the heading
                subtitle='Login to your account' // Subtitle for the heading
            />
            {/* Input component for email field */}
            <Input 
                id='email' // ID for the email input field
                label='Email' // Label for the email input field
                disabled={isLoading} // Disabling input field when isLoading is true
                register={register} // Passing register function from react-hook-form to register input field
                errors={errors} // Passing errors object from react-hook-form for validation errors
                required // Marking input field as required
            />
            {/* Input component for password field */}
            <Input 
                id='password' // ID for the password input field
                type='password' // Setting input type to 'password'
                label='Password' // Label for the password input field
                disabled={isLoading} // Disabling input field when isLoading is true
                register={register} // Passing register function from react-hook-form to register input field
                errors={errors} // Passing errors object from react-hook-form for validation errors
                required // Marking input field as required
            />
        </div>
    )    

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <br />
            <Button
                outline
                label='Continue with Google'
                icon={FcGoogle}
                onClick={() => signIn('google')}
            />
            <Button
                outline
                label='Continue with Github'
                icon={AiFillGithub}
                onClick={() => signIn('github')}
            />
            <div className='text-neutral-500 text-center mt-4 font-light'>
                <div className='justify-center flex flex-row items-center gap-2'>
                    <div>
                        First time using Airbnb?
                    </div>
                    <div
                        onClick={toggle} 
                        className='text-neutral-800 cursor-pointer hover:underline'>
                        Create an account
                    </div>
                </div>
            </div>
        </div>
    )

    return ( 
        <Modal 
            disabled={isLoading} // Prop to disable the modal while isLoading is true
            isOpen={loginModal.isOpen} // Prop to control the visibility of the modal
            title='Login' // Prop for the title of the modal
            actionLabel='Continue' // Prop for the label of the action button
            onClose={loginModal.onClose} // Prop for the function to close the modal
            onSubmit={handleSubmit(onSubmit)} // Prop for the function to handle form submission
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default LoginModal; // Exporting the LoginModal component as default
