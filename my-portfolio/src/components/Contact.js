import { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import emailjs from '@emailjs/browser'
export default function Contact() {
  const form = useRef() // To reference the form
  const [message, setMessage] = useState('') // State to display submission status

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const sendEmail = (e) => {
    e.preventDefault() // Prevent form reload

    emailjs
      .sendForm(
        'service_p29608d', // Replace with your EmailJS Service ID
        'template_q2rdw1s', // Replace with your EmailJS Template ID
        form.current,
        'mOS-usoTMi-MX251K' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text)
          setMessage('Email sent successfully!')
        },
        (error) => {
          console.log(error.text)
          setMessage('Failed to send email. Please try again later.')
        }
      )

    e.target.reset() // Clear the form after submission
  }

  return (
    <div className="py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl leading-7">Get in touch</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Contact Me
          </p>
        </div>

        {/* Attach form ref and submission handler */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
          data-aos="zoom-in"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  required
                  name="first_name" // Match template variable in EmailJS
                  id="first-name"
                  autoComplete="given-name"
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-current sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  required
                  name="last_name" // Match template variable in EmailJS
                  id="last-name"
                  autoComplete="family-name"
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-current sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  required
                  name="email" // Match template variable in EmailJS
                  id="email"
                  autoComplete="email"
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-current sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message" // Match template variable in EmailJS
                  required
                  id="message"
                  rows={4}
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-current sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button type="submit" className="btn btn-outline text-sm w-full">
              Send it
            </button>
          </div>

          {/* Display submission status */}
          {message && (
            <p className="text-center mt-4 text-sm text-success">{message}</p>
          )}
        </form>
      </div>
    </div>
  )
}
