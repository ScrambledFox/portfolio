import React from 'react'
import './FutureCard.css'

const FutureCard = ({ future }) => {
  let { title, text } = future
  return (
    <div className="future-card-wrapper">
      <div className="future-card">
        <div className="future-card-content">
          <div className="future-text">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FutureCard
