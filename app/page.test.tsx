import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'

vi.mock('../components/HealthBadge', () => ({
    default: () => <div>Health Badge Content</div>
}))

test('Page', () => {
    render(<Page />)
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined()
})
