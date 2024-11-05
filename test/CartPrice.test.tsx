
import { render, screen } from '@testing-library/react'
import CartTotal from '../src/components/carts/CartTotal'


describe('Total Price', () => {
  it("should render total price when provided", () => {
    render(<CartTotal totalPrice={200} title='total price'/>)
    
    // screen.debug()
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/price/i)
  })
})