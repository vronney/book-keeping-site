import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Checkbox } from '@/components/ui/Checkbox'
// import { Select } from '@/components/ui/Select' // Requires slightly complex testing, verify basic render

describe('UI Components', () => {
    describe('Button', () => {
        it('renders variants correctly', () => {
            const { rerender } = render(<Button variant="default">Default</Button>)
            expect(screen.getByRole('button').className).toContain('bg-primary')

            rerender(<Button variant="destructive">Destructive</Button>)
            expect(screen.getByRole('button').className).toContain('bg-destructive')
        })

        it('shows loading spinner when isLoading is true', () => {
            render(<Button isLoading>Loading</Button>)
            const btn = screen.getByRole('button') as HTMLButtonElement
            expect(btn.disabled).toBe(true)
            // Check for loader class or element
            // Loader from Lucide typically renders an svg
            expect(document.querySelector('.animate-spin')).not.toBeNull()
        })
    })

    describe('Input', () => {
        it('renders label and helper text', () => {
            render(<Input label="Test Input" helperText="Helper" />)
            expect(screen.getByText('Test Input')).toBeDefined()
            expect(screen.getByText('Helper')).toBeDefined()
        })

        it('shows error state', () => {
            render(<Input label="Error Input" error="Invalid value" />)
            const input = screen.getByRole('textbox')
            expect(input.className).toContain('border-destructive')
            expect(screen.getByText('Invalid value')).toBeDefined()
        })
    })

    describe('Checkbox', () => {
        it('renders label and handles change', () => {
            const handleChange = vi.fn()
            render(<Checkbox label="Accept Terms" onChange={handleChange} />)

            const checkbox = screen.getByRole('checkbox')
            expect(checkbox).toBeDefined()
            expect(screen.getByText('Accept Terms')).toBeDefined()

            fireEvent.click(checkbox)
            expect(handleChange).toHaveBeenCalledTimes(1)
        })
    })
})
