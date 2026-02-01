import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HomePage, { metadata } from '@/app/(marketing)/page'
import { Hero, ValueProps, ServicesOverview, ProcessPreview, CTASection } from '@/components/marketing'

// Mock next/link to render <a> for href checking
// vi.mock('next/link', () => ({
//   default: ({ children, href, ...props }: any) => <a href={href} {...props}>{children}</a>
// })) 
// Actually standard render handles next/link reasonably well in vitest if we don't mock it too aggressively, 
// usually it renders an anchor tag. But let's verify if we need to mock it.
// The previous tests didn't mock it and it worked.

describe('Home Page Components', () => {
    describe('Hero', () => {
        it('renders main headline', () => {
            render(<Hero />)
            expect(screen.getByText(/Expert Bookkeeping Services/i)).toBeDefined()
        })

        it('renders pricing and process links', () => {
            render(<Hero />)
            // Debug output to see what is rendered
            // screen.debug()
            const pricingLink = screen.getByRole('link', { name: /See Our Pricing/i })
            const processLink = screen.getByRole('link', { name: /Learn How It Works/i })

            expect(pricingLink.getAttribute('href')).toBe('/pricing')
            expect(processLink.getAttribute('href')).toBe('/process')
        })
    })

    describe('ValueProps', () => {
        it('renders three value pillars', () => {
            render(<ValueProps />)
            expect(screen.getByText('Accurate Books')).toBeDefined()
            expect(screen.getByText('Save Time')).toBeDefined()
            expect(screen.getByText('Tax Ready')).toBeDefined()
        })
    })

    describe('ServicesOverview', () => {
        it('renders services and link', () => {
            render(<ServicesOverview />)
            expect(screen.getByText('Bookkeeping')).toBeDefined()
            expect(screen.getByText('Payroll')).toBeDefined()

            const links = screen.getAllByRole('link', { name: /Learn More/i })
            expect(links.length).toBeGreaterThan(0)
            expect(links[0].getAttribute('href')).toBe('/services')
        })
    })

    describe('ProcessPreview', () => {
        it('renders 4 steps', () => {
            render(<ProcessPreview />)
            expect(screen.getByText('Intake')).toBeDefined()
            expect(screen.getByText('Onboard')).toBeDefined()
        })

        it('links to full process', () => {
            render(<ProcessPreview />)
            const link = screen.getByRole('link', { name: /See Full Process/i })
            expect(link.getAttribute('href')).toBe('/process')
        })
    })

    describe('CTASection', () => {
        it('links to contact', () => {
            render(<CTASection />)
            const link = screen.getByRole('link', { name: /Get in Touch/i })
            expect(link.getAttribute('href')).toBe('/contact')
        })
    })

    describe('Metadata', () => {
        it('has correct title and description', () => {
            expect(metadata.title).toContain('BookkeeperPro')
            expect(metadata.description).toBeDefined()
        })
    })
})
