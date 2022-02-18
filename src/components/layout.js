import * as React from "react"
import Header from './header.js';
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

deckDeckGoHighlightElement();

const Layout = ({ location, title, children }) => {
  return (
    <div className="bg-[#1d252c] min-h-screen">
      <Header />

      <main class="max-w-[1440px] mx-auto">{children}</main>
      
      <footer class="w-full text-center py-4">
        <p class="text-secondary text-sm">© {new Date().getFullYear()} | Joel Male</p>
      </footer>
    </div>
  )
}

export default Layout
