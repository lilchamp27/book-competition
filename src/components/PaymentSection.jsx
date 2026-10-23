import { useState } from 'react'

const methods = [
  { key: 'card', label: 'Card' },
  { key: 'paypal', label: 'PayPal' },
  { key: 'bank', label: 'Bank Transfer' },
  { key: 'crypto', label: 'Crypto' },
]

// Display-only: nothing typed here is stored or sent anywhere.
export default function PaymentSection() {
  const [method, setMethod] = useState('card')
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    setDone(true)
  }

  return (
    <section className="payment">
      <div className="payment-head">
        <h3>Outstanding Fee</h3>
        <span className="amount">$2,000.00 USD</span>
      </div>

      <div className="methods">
        {methods.map((m) => (
          <button
            key={m.key}
            type="button"
            className={`method ${method === m.key ? 'active' : ''}`}
            onClick={() => { setMethod(m.key); setDone(false) }}
          >
            {m.label}
          </button>
        ))}
      </div>

      {done ? (
        <div className="notice">This is a demo payment screen — no payment was processed.</div>
      ) : (
        <form className="pay-form" onSubmit={handleSubmit} autoComplete="off">
          {method === 'card' && (
            <>
              <div className="brands">
                <span>VISA</span><span>Mastercard</span><span>AMEX</span><span>Verve</span>
              </div>
              <label>Cardholder Name<input placeholder="John Doe" /></label>
              <label>Card Number<input placeholder="1234 5678 9012 3456" inputMode="numeric" /></label>
              <div className="row">
                <label>Expiry<input placeholder="MM / YY" /></label>
                <label>CVV<input placeholder="123" inputMode="numeric" /></label>
              </div>
            </>
          )}

          {method === 'paypal' && (
            <>
              <p className="hint">You'll be redirected to PayPal to complete your payment.</p>
              <label>PayPal Email<input type="email" placeholder="you@example.com" /></label>
            </>
          )}

          {method === 'bank' && (
            <div className="bank-details">
              <div><span>Bank</span><strong>Example Bank</strong></div>
              <div><span>Account Name</span><strong>Grand Book Competition</strong></div>
              <div><span>Account Number</span><strong>0000000000</strong></div>
              <div><span>Reference</span><strong>BOOK-2000</strong></div>
            </div>
          )}

          {method === 'crypto' && (
            <>
              <label>Network
                <select>
                  <option>Bitcoin (BTC)</option>
                  <option>Ethereum (ETH)</option>
                  <option>USDT (TRC20)</option>
                </select>
              </label>
              <div className="wallet">wallet-address-placeholder</div>
            </>
          )}

          <button type="submit" className="pay-btn">Pay $2,000.00</button>
          <p className="secure">Secure checkout</p>
        </form>
      )}
    </section>
  )
}
