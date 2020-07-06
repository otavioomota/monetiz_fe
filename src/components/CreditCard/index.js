import React from 'react';
import PaymentCard from 'react-payment-card-component'


function CreditCard({ 
  cardHolder, 
  cardNumber, 
  cvc, 
  brand,
  month,
  year, 
  flipped, 
}){
  return (
      <PaymentCard
        bank="itau"
        brand={brand}
        number={cardNumber}
        cvv={cvc}
        holderName={cardHolder === '' ? 'nome no cartão' : cardHolder}
        expiration={`${month === '' ? 'MM': month}/${year === '' ? 'YYYY': year}`}
        flipped={flipped}
      />
  )
}

export default CreditCard;