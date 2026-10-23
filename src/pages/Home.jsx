import { Link } from 'react-router-dom'
import { participants } from '../data/participants.js'

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Status Register</p>
        <h1>Immigrants List</h1>
        <p>Please select your name from the register below to check your Immigration Status.</p>
      </section>

      <div className="register-head">
        <h2>Registered Immigrants</h2>
        <span>{participants.length} entries</span>
      </div>
      <section className="register">
        {participants.map((p) => (
          <Link
            key={p.id}
            to={`/participant/${p.id}`}
            className={`entry ${p.qualified ? 'entry-green' : 'entry-red'}`}
          >
            <span className="entry-number">{p.id.padStart(2, '0')}</span>
            <span className="entry-name">{p.name}</span>
            <span className={`badge ${p.qualified ? 'badge-green' : 'badge-red'}`}>
              {p.qualified ? 'Qualified' : 'Not Qualified'}
            </span>
            <span className="entry-arrow" aria-hidden="true">›</span>
          </Link>
        ))}
      </section>
    </>
  )
}
