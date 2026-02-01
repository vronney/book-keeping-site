import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HomePage from '@/app/(marketing)/page'
import ServicesPage from '@/app/(marketing)/services/page'
import PricingPage from '@/app/(marketing)/pricing/page'
import ProcessPage from '@/app/(marketing)/process/page'

describe('Navigation Flow Integration', () => {
    it('Home page has links to all major sections', () => {
        render(<HomePage />)
        // Verify primary navigation links exist (in Hero, etc)
        const pricingLink = screen.getByRole('link', { name: /See Our Pricing/i })
        const processLink = screen.getByRole('link', { name: /Learn How It Works/i })
        const servicesLinks = screen.getAllByRole('link', { name: /Learn More/i })

        expect(pricingLink.getAttribute('href')).toBe('/pricing')
        expect(processLink.getAttribute('href')).toBe('/process')
        expect(servicesLinks[0].getAttribute('href')).toBe('/services')
    })

    it('Services page links to Contact', () => {
        render(<ServicesPage />)
        const contactLinks = screen.getAllByRole('link', { name: /Get in Touch/i })
        expect(contactLinks.length).toBeGreaterThan(0)
        expect(contactLinks[0].getAttribute('href')).toBe('/contact')
    })

    it('Pricing page links to Contact', () => {
        render(<PricingPage />)
        const contactLinks = screen.getAllByRole('link', { name: /Get Started/i })
        // Could be multiple "Get Started" buttons
        contactLinks.forEach(link => {
            expect(link.getAttribute('href')).toBe('/contact')
        })
    })

    it('Process page links to Contact', () => {
        render(<ProcessPage />)
        const contactLinks = screen.getAllByRole('link', { name: /Get in Touch/i })
        expect(contactLinks[0].getAttribute('href')).toBe('/contact')
    })
})
