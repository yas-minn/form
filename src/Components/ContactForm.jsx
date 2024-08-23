import React, { useState } from 'react';
import "../Components/ContactForm.css"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        options: {
            optionA: false,
            optionB: false,
        },
        isAgreed: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                options: {
                    ...formData.options,
                    [name]: checked,
                },
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.isAgreed) {
            alert('You must consent to being contacted!');
            return;
        }
        console.log('Form submitted:', formData);
        setFormData({ firstName: '', lastName: '', email: '', message: '', options: { optionA: false, optionB: false }, isAgreed: false }); // Reset form
    };

    return (
        <form onSubmit={handleSubmit} id='Content'>
            <div id='Name'>
                <div className='Input'>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        className='box1'
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='Input'>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        className='box1'
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className='Input'>
                <label htmlFor="email">Email Adress</label>
                <input
                    className='box2'
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Query type</label>
                <div id='Options'>
                    <div className='box3'>
                        <input
                             className='checkbox'
                            type="checkbox"
                            id="optionA"
                            name="optionA"
                            checked={formData.options.optionA}
                            onChange={handleChange}
                        />
                        <label htmlFor="optionA">General enquiry</label>
                    </div>
                    <div  className='box3'>
                        <input
                           className='checkbox'
                            type="checkbox"
                            id="optionB"
                            name="optionB"
                            checked={formData.options.optionB}
                            onChange={handleChange}
                        />
                        <label htmlFor="optionB">Support request</label>
                    </div>
                </div>
            </div>
            <div className='Input'>
                <label htmlFor="message">Message</label>
                <textarea
                className='message'
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <input
                 className='checkbox'
                    type="checkbox"
                    id="isAgreed"
                    name="isAgreed"
                    checked={formData.isAgreed}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="isAgreed">I consent to being contacted by the team</label>
            </div>
            <button type="submit" id='Btn'>Submit</button>
        </form>
    );
};

export default ContactForm;
