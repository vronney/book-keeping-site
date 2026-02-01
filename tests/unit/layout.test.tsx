import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileNav } from '@/components/layout/MobileNav'

// Mock usePathname
import * as navigation from 'next/navigation';
import React from 'react';

// Mock scroll listener
Object.defineProperty(window, 'scrollTo', { value: () => { }, writable: true });

vi.mock('next/navigation', () => ({
    usePathname: () => '/',
}));

describe('Layout Components', () => {
    describe('Header', () => {
        it('renders all nav links', () => {
            render(<Header />)
            expect(screen.getByText('Home')).toBeDefined()
            expect(screen.getByText('Services')).toBeDefined()
            expect(screen.getByText('About')).toBeDefined()
            expect(screen.getByText('Pricing')).toBeDefined()
        })

        it('CTA links to /contact', () => {
            render(<Header />)
            const cta = screen.getByText('Get Started').closest('a')
            expect(cta).toHaveProperty('href', expect.stringContaining('/contact'))
        })
    })

    describe('Footer', () => {
        it('renders legal links', () => {
            render(<Footer />)
            expect(screen.getByText('Privacy Policy')).toBeDefined()
            expect(screen.getByText('Terms of Service')).toBeDefined()
        })

        it('renders copyright with current year', () => {
            render(<Footer />)
            const year = new Date().getFullYear().toString()
            expect(screen.getByText((content) => content.includes(year))).toBeDefined()
        })
    })

    describe('MobileNav', () => {
        it('renders menu button', () => {
            render(<MobileNav items={[]} />)
            expect(screen.getByLabelText('Open menu')).toBeDefined()
        })

        it('opens drawer on click', () => {
            const items = [{ title: 'Home', href: '/' }]
            render(<MobileNav items={items} />)

            const openBtn = screen.getByLabelText('Open menu')
            fireEvent.click(openBtn)

            // Check for close button or drawer content
            expect(screen.getByLabelText('Close menu')).toBeDefined()
            expect(screen.getByText('Home')).toBeDefined()
        })
    })
})
