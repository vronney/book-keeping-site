import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ServicesPage, { metadata as serviceMeta } from '@/app/(marketing)/services/page'
import PricingPage, { metadata as pricingMeta } from '@/app/(marketing)/pricing/page'
import ProcessPage, { metadata as processMeta } from '@/app/(marketing)/process/page'

describe('Marketing Pages', () => {
    describe('Services Page', () => {
        it('renders correct title and metadata', () => {
            render(<ServicesPage />)
            expect(screen.getByText('Our Services')).toBeDefined()
            expect(serviceMeta.title).toContain('Services')
        })

        it('renders all three service cards', () => {
            render(<ServicesPage />)
            expect(screen.getByText('Bookkeeping')).toBeDefined()
            expect(screen.getByText('Payroll')).toBeDefined()
            expect(screen.getByText('Tax Support')).toBeDefined()
        })

        it('renders tax disclaimer', () => {
            render(<ServicesPage />)
            expect(screen.getByText(/Note on Taxes/i)).toBeDefined()
            expect(screen.getByText(/we do not file income taxes/i)).toBeDefined()
        })
    })

    describe('Pricing Page', () => {
        it('renders correct title and metadata', () => {
            render(<PricingPage />)
            expect(screen.getByText(/Transparent Pricing/i)).toBeDefined()
            expect(pricingMeta.title).toContain('Pricing')
        })

        it('renders three pricing packages', () => {
            render(<PricingPage />)
            expect(screen.getByText('Essentials')).toBeDefined()
            expect(screen.getByText('Growth')).toBeDefined()
            expect(screen.getByText('Premium')).toBeDefined()
        })

        it('highlights popular package', () => {
            render(<PricingPage />)
            expect(screen.getByText('Most Popular')).toBeDefined()
        })

        it('renders FAQ section', () => {
            render(<PricingPage />)
            expect(screen.getByText(/Frequently Asked Questions/i)).toBeDefined()
        })
    })

    describe('Process Page', () => {
        it('renders correct title and metadata', () => {
            render(<ProcessPage />)
            expect(screen.getByText('How It Works')).toBeDefined()
            expect(processMeta.title).toContain('Process')
        })

        it('renders 4 steps', () => {
            render(<ProcessPage />)
            expect(screen.getByText('Complete Intake Form')).toBeDefined()
            expect(screen.getByText('Qualification Review')).toBeDefined()
            expect(screen.getByText('Discovery Call')).toBeDefined()
            expect(screen.getByText('Onboarding')).toBeDefined()
        })
    })
})
