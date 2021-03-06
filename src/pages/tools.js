import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import vscodeIcon from "../images/tools/vscode.png"
import onePasswordIcon from "../images/tools/1password.png"
import alfredIcon from "../images/tools/alfred.png"
import telegramIcon from "../images/tools/telegram.png"
import figmaIcon from "../images/tools/figma.png"
import cleanshotXIcon from "../images/tools/cleanshot-x.png"
import spotifyIcon from "../images/tools/spotify.png"
import braveIcon from "../images/tools/brave.png"
import bearIcon from "../images/tools/bear.png"

import productMbpIcon from "../images/tools/product-mbp.png"
import productMxMaster3Icon from "../images/tools/product-mx-master-3.png"
import productKeychronK2Icon from "../images/tools/product-keychronk2.jpg"

const Tools = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title="Tools"
        description="A collection of my most used tools & hardware for every-day dev."
      />

      <div className="relative flex items-center justify-center w-full pt-[12rem] pb-32">
        <div className="w-[95%] sm:w-[80%] flex flex-col items-center text-white">
          <h1 className="text-6xl font-bold sm:text-7xl max-w-[100%] md:max-w-[90%] lg:max-w-[60%] mx-auto text-center">
            Tools
          </h1>
          <h2 className="max-w-lg py-8 text-base text-center text-secondary lg:text-xl">
            A collection of the products, apps, and services I use on a daily
            basis for work and life ✨
          </h2>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-6">
        <div className="py-2 text-left text-secondary">
          <h3 class="text-3xl">Apps & services</h3>
          <p class="py-2">
            Some of the apps & services I use to get work done and keep track of
            my personal life
          </p>

          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 py-8">
            <a
              href="https://code.visualstudio.com/"
              class="border-tertiary border-opacity-30 border rounded group"
            >
              <div class="py-8 w-full bg-[#242424] rounded-t flex items-center justify-center duration-300 group-hover:bg-[#292929]">
                <img src={vscodeIcon} class="w-20 h-20" alt="" />
              </div>
              <div class="p-4">
                <h4 class="mb-1 tracking-wide">VSCode</h4>
                <p class="text-sm">The only IDE/code editor you'll ever need</p>
              </div>
            </a>
            <a
              href="https://1password.com/"
              class="border-tertiary border-opacity-30 border rounded group"
            >
              <div class="py-8 w-full bg-[#242424] rounded-t flex items-center justify-center duration-300 group-hover:bg-[#292929]">
                <img src={onePasswordIcon} class="w-20 h-20" alt="" />
              </div>
              <div class="p-4">
                <h4 class="mb-1 tracking-wide">1Password</h4>
                <p class="text-sm">
                  The best password manager and the first thing I install on my
                  new devices
                </p>
              </div>
            </a>
            <a
              href="https://alfredapp.com/"
              class="border-tertiary border-opacity-30 border rounded group"
            >
              <div class="py-8 w-full bg-[#242424] rounded-t flex items-center justify-center duration-300 group-hover:bg-[#292929]">
                <img src={alfredIcon} class="w-20 h-20" alt="" />
              </div>
              <div class="p-4">
                <h4 class="mb-1 tracking-wide">Alfred</h4>
                <p class="text-sm">
                  The only replacement to spotlight with workflows that make it
                  a beast
                </p>
              </div>
            </a>
            <a
              href="https://telegram.org/"
              class="border-tertiary border-opacity-30 border rounded group"
            >
              <div class="py-8 w-full bg-[#242424] rounded-t flex items-center justify-center duration-300 group-hover:bg-[#292929]">
                <img src={telegramIcon} class="w-20 h-20" alt="" />
              </div>
              <div class="p-4">
                <h4 class="mb-1 tracking-wide">Telegram</h4>
                <p class="text-sm">My preferred text communication platform</p>
              </div>
            </a>
            <a
              href="https://figma.com/"
              class="border-tertiary border-opacity-30 border rounded group"
            >
              <div class="py-8 w-full bg-[#242424] rounded-t flex items-center justify-center duration-300 group-hover:bg-[#292929]">
                <img src={figmaIcon} class="w-20 h-20" alt="" />
              </div>
              <div class="p-4">
                <h4 class="mb-1 tracking-wide">Figma</h4>
                <p class="text-sm">My go-to design tool</p>
              </div>
            </a>
            <a
              href="https://cleanshot.com/"
              class="border-tertiary border-opacity-30 border rounded group"
            >
              <div class="py-8 w-full bg-[#242424] rounded-t flex items-center justify-center duration-300 group-hover:bg-[#292929]">
                <img src={cleanshotXIcon} class="w-20 h-20" alt="" />
              </div>
              <div class="p-4">
                <h4 class="mb-1 tracking-wide">Cleanshot X</h4>
                <p class="text-sm">
                  My favourite app for capturing screenshots and recordings
                </p>
              </div>
            </a>
            <a
              href="https://spotify.com/"
              class="border-tertiary border-opacity-30 border rounded group"
            >
              <div class="py-8 w-full bg-[#242424] rounded-t flex items-center justify-center duration-300 group-hover:bg-[#292929]">
                <img src={spotifyIcon} class="w-20 h-20" alt="" />
              </div>
              <div class="p-4">
                <h4 class="mb-1 tracking-wide">Spotify</h4>
                <p class="text-sm">Currently loving Afro Fusion 🔥</p>
              </div>
            </a>
            <a
              href="https://brave.com/"
              class="border-tertiary border-opacity-30 border rounded group"
            >
              <div class="py-8 w-full bg-[#242424] rounded-t flex items-center justify-center duration-300 group-hover:bg-[#292929]">
                <img src={braveIcon} class="w-20 h-20" alt="" />
              </div>
              <div class="p-4">
                <h4 class="mb-1 tracking-wide">Brave</h4>
                <p class="text-sm">
                  A beautiful and clean privacy-focused browser
                </p>
              </div>
            </a>
            <a
              href="https://bear.app/"
              class="border-tertiary border-opacity-30 border rounded group"
            >
              <div class="py-8 w-full bg-[#242424] rounded-t flex items-center justify-center duration-300 group-hover:bg-[#292929]">
                <img src={bearIcon} class="w-20 h-20" alt="" />
              </div>
              <div class="p-4">
                <h4 class="mb-1 tracking-wide">Bear</h4>
                <p class="text-sm">
                  An amazing markdown note taking app for MacOS & iOS
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="py-2 text-left text-secondary">
          <h3 class="text-3xl">Hardware</h3>
          <p class="py-2">
            My primary setup used to code, and make valuable content and other
            stuff
          </p>

          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 py-8">
            <a
              href="https://amzn.to/3tkP5Vw"
              class="border-tertiary border-opacity-30 border rounded group"
            >
              <div class="py-8 w-full bg-[#242424] rounded-t flex items-center justify-center duration-300 group-hover:bg-[#292929]">
                <img src={productMbpIcon} class="w-20 h-20" alt="" />
              </div>
              <div class="p-4">
                <h4 class="mb-1 tracking-wide">14" Macbook Pro (Space Grey)</h4>
                <p class="text-sm">
                  10-Core CPU, 16-Core GPU, 16GB Unified Memory, 1TB SSD Storage
                </p>
              </div>
            </a>
            <a
              href="https://amzn.to/3BYsHoB"
              class="border-tertiary border-opacity-30 border rounded group"
            >
              <div class="py-8 w-full bg-[#242424] rounded-t flex items-center justify-center duration-300 group-hover:bg-[#292929]">
                <img src={productMxMaster3Icon} class="w-20 h-20" alt="" />
              </div>
              <div class="p-4">
                <h4 class="mb-1 tracking-wide">
                  Logitech MX Master 3 (Graphite)
                </h4>
                <p class="text-sm">
                  The only mouse worth having as a developer
                </p>
              </div>
            </a>
            <a
              href="https://amzn.to/3M7nKOX"
              class="border-tertiary border-opacity-30 border rounded group"
            >
              <div class="py-8 w-full bg-[#242424] rounded-t flex items-center justify-center duration-300 group-hover:bg-[#292929] min-h-[144px]">
                <img src={productKeychronK2Icon} class="w-20 h-auto" alt="" />
              </div>
              <div class="p-4">
                <h4 class="mb-1 tracking-wide">Keychron K2</h4>
                <p class="text-sm">
                  A beautiful middle-ground between a regular mac keyboard and a
                  mechanical keyboard
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Tools

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
