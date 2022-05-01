import axios from "axios"
import React, { useState } from "react"

export const NewsletterComponent = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [newsletterRequestSent, setNewsletterRequestSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()

    axios
      .post(
        "/api/newsletter",
        {
          name,
          email,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(res => {
        setNewsletterRequestSent(true)
        if (res.data.status) {
          setSubscribed(true)
        }
      })
  }

  return (
    <div className="my-8">
      <form className="text-white" onSubmit={onSubmit}>
      {!newsletterRequestSent && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 newsletter-form">
          <div className="flex flex-col items-start">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              className="w-full input"
              placeholder="Richard"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="w-full input"
              placeholder="richard@piedpiper.com"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button className="col-span-2 mt-4 md:mt-0 link-btn md:col-span-1">
            <span className="flex items-center justify-center"><span className="mr-2 text-xl">✨</span> Subscribe</span>
          </button>
        </div>
      )}
      {newsletterRequestSent && subscribed && (
        <div className="mt-4">
          <p className="my-2 text-xl sm:text-2xl">🔥 Thanks for subscribing! 🔥</p>
        </div>
      )}
      {newsletterRequestSent && !subscribed && (
        <div className="mt-4">
          <p className="my-2 text-xl sm:text-2xl">Oops, something went wrong. Try again maybe?</p>
        </div>
      )}
      </form>
    </div>
  )
}
