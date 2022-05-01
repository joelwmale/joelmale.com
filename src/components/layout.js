import * as React from "react"
import Header from "./header.js"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

deckDeckGoHighlightElement()

const Layout = ({ location, title, children, className }) => {
  return (
    <div className="min-h-screen bg-primary">
      <div className="bg-gradient-to-r w-full h-1 from-[#E39600] via-[#EA4C89] to-[#8F48EB]" />

      <Header />

      <main class={`max-w-[1440px] mx-auto ${className}`}>{children}</main>

      <footer class="w-full text-center py-4 bg-dark-400">
        <p class="text-secondary text-sm">
          © {new Date().getFullYear()} | Joel Male
        </p>
      </footer>
    </div>
  )
}

export default Layout
