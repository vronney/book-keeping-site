import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AboutPage, { metadata as aboutMeta } from '@/app/(marketing)/about/page'
import PrivacyPage, { metadata as privacyMeta } from '@/app/(marketing)/privacy/page'
import TermsPage, { metadata as termsMeta } from '@/app/(marketing)/terms/page'
import DataHandlingPage, { metadata as dataMeta } from '@/app/(marketing)/data-handling/page'
import { Footer } from '@/components/layout/Footer'

describe('About & Legal Pages', () => {
    describe('About Page', () => {
        it('renders hero and story sections', () => {
            render(<AboutPage />)
            expect(screen.getByText(/Empowering Business Owners/i)).toBeDefined()
            expect(screen.getByText('Our Story')).toBeDefined()
        })

        it('renders trust signals', () => {
            render(<AboutPage />)
            expect(screen.getByText(/Why Businesses Trust Us/i)).toBeDefined()
            expect(screen.getByText('100+')).toBeDefined() // Client count
        })

        it('has correct SEO metadata', () => {
            expect(aboutMeta.title).toContain('About Us')
        })
    })

    describe('Legal Pages', () => {
        it('Privacy Page renders content and noindex', () => {
            render(<PrivacyPage />)
            expect(screen.getByText('Privacy Policy')).toBeDefined()
            expect(screen.getAllByText(/Information We Collect/i).length).toBeGreaterThan(0)
            expect(privacyMeta.robots).toEqual({ index: false, follow: true })
        })

        it('Terms Page renders content and noindex', () => {
            render(<TermsPage />)
            expect(screen.getByText('Terms of Service')).toBeDefined()
            expect(screen.getByText(/User Obligations/i)).toBeDefined()
            expect(termsMeta.robots).toEqual({ index: false, follow: true })
        })

        it('Data Handling Page renders content and noindex', () => {
            render(<DataHandlingPage />)
            expect(screen.getByText(/Data Handling & Security/i)).toBeDefined()
            expect(screen.getByText(/Encryption/i)).toBeDefined()
            expect(dataMeta.robots).toEqual({ index: false, follow: true })
        })
    })

    describe('Footer Links', () => {
        it('renders legal links', () => {
            render(<Footer />)
            const privacyLink = screen.getByRole('link', { name: /Privacy Policy/i })
            const termsLink = screen.getByRole('link', { name: /Terms of Service/i })
            const dataLink = screen.getByRole('link', { name: /Data Handling/i })

            expect(privacyLink.getAttribute('href')).toBe('/privacy')
            expect(termsLink.getAttribute('href')).toBe('/terms')
            expect(dataLink.getAttribute('href')).toBe('/data-handling')
        })
    })
})
