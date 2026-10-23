import { Link, useParams } from 'react-router-dom'
import { getParticipant } from '../data/participants.js'
import PaymentSection from '../components/PaymentSection.jsx'

export default function Participant() {
  const { id } = useParams()
  const person = getParticipant(id)

  if (!person) {
    return (
      <div className="status-card">
        <div className="notice-head"><span>Record Not Found</span></div>
        <div className="notice-body">
          <h2>Immigrant not found</h2>
          <Link to="/" className="back">← Back to Immigrants</Link>
        </div>
      </div>
    )
  }

  const ref = `Ref. ${person.id.padStart(2, '0')}`

  return (
    <>
      <Link to="/" className="back">← Back to Immigrants</Link>

      {person.qualified ? (
        <div className="status-card status-green">
          <div className="notice-head"><span>Immigration Status Notice</span><span>{ref}</span></div>
          <div className="notice-body">
            <div className="status-icon">✓</div>
            <h2>{person.name}</h2>
            <span className="badge badge-green">Cleared to Travel</span>
            <p className="status-message">You are allowed to travel. Congratulations.</p>
          </div>
        </div>
      ) : (
        <>
          <div className="status-card status-red">
            <div className="notice-head"><span>Immigration Status Notice</span><span>{ref}</span></div>
            <div className="notice-body">
              <div className="status-icon">✕</div>
              <h2>{person.name}</h2>
              <span className="badge badge-red">Travel Restricted</span>
              <p className="status-message">
                You are restricted from travelling. You have an outstanding balance of{' '}
                <strong>$2,000 USD</strong> to pay.
              </p>
            </div>
          </div>
          <PaymentSection />
        </>
      )}
    </>
  )
}
