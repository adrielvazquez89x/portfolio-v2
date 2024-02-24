/* 'use client'
import Link from 'next/link';
//import { useForm, ValidationError } from '@formspree/react';
import React from 'react'
import Button from '@/components/button/button';

export default function Contact() {

const formKey: string = process.env.NEXT_FORMKEY || "";

const [state, handleSubmit] = useForm('xbjevjar');

  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }


  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8'>
        <div>
          <h1>
            Let's team up and make something awesome!
          </h1>
          <p className='text-white text-xl mb-10'>
            No more waiting around! Let's join forces and bring your ideas to life. Get in touch with me today and let's kick-start your next project together.
          </p>
          <div className='flex justify-around'>
            <Link href="https://www.linkedin.com/in/adriel-alejandro-vazquez" target="_blank">
              icono linkedin
            </Link>
            <Link href="https://github.com/adrielvazquez89x" target="_blank">
              icono githb
            </Link>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Your E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <Button text="Send" type="submit" disabled={state.submitting} />
          </form>
        </div>
      </div>
    </div>
  );
};
 */