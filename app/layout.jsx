import React from 'react';
import { Fira_Sans } from 'next/font/google';
import '@/styles/global.scss';
import Navigation from '@/components/blocks/Navigation/Navigation';

const firaSans = Fira_Sans({
    variable: "--font-fira-sans",
    subsets: ['latin'],
    weight: "400"
});

export const metadata = {
    title: "Asura Scans",
    description: "Online comic reading platform"
}

const RootLayout = ({children}) => {
    return (
        <html lang='en'>
            <body className={`${firaSans.variable}`}>
                <Navigation />
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout;