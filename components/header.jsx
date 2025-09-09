import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SignedIn,SignInButton, UserButton, SignedOut,SignUpButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto pl-2 pr-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center cursor-pointer">
            <Image 
            src="/smol_logo.png"
            alt = "MediMedi Logo"
            width = {100}
            height={100}
            className='h-10 w-auto object-contain'
            />
            </Link>

            <div className="flex items-center space-x-2">
                <SignedOut>
              <SignInButton >
                <Button variant= "secondary">Sign In</Button>
              </SignInButton>
              
            </SignedOut>
            <SignedIn>
              <UserButton 
              appearance={{
                elements: {
                    avatarBox: "w-20 h-20",
                    userButtonPopoverCard: "shadow-xl",
                    userPreviewMainIdentifier: "font-semibold",
                },
              }}
              />
            </SignedIn>
            </div>
        </nav>
    </header>
  )
}

export default Header