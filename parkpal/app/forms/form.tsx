"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
    firstName: string;
    lastName: string;
    senderEmail: string;
    message: string;
}

const Form: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        senderEmail: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitSuccess(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    senderEmail: '',
                    message: ''
                });
            } else {
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className='w-1/2'>
                <form className='flex flex-col w-full justify-center bg-gray-100 p-10 rounded-md ' onSubmit={handleSubmit}>
                    <div className='flex justify-between space-x-4'>
                        <div className='flex flex-col w-1/2'>
                            <label>First Name</label>
                            <input
                                name="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={handleChange}
                                className='h-8 rounded-md p-2' />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <label>Last Name</label>
                            <input
                                name="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={handleChange}
                                className='h-8 rounded-md p-2' />
                        </div>
                    </div>
                    <label className='mt-2'>Email</label>
                    <input
                        name="senderEmail"
                        type="email"
                        value={formData.senderEmail}
                        onChange={handleChange}
                        className='h-8 rounded-md p-2' />
                    <label className='mt-2'>Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className='h-24 rounded-md p-2' />
                    <button
                        type='submit'
                        className='mt-4 w-1/6 h-18 p-2 rounded-full bg-[#183456] text-white'
                        disabled={isSubmitting}>
                        {isSubmitting ? '...' : 'Send'}
                    </button>
                </form>
                {submitSuccess && (
                <p className="text-blue-950 mt-4">Message sent successfully!</p>
            )}
        </div>
    );
}

export default Form;

