import React from 'react';
import { APPLICATION_NAME, CURRENCY_ACRONYM } from './config';

export default function Balance() {
  const [id, setId] = React.useState(null);
  const [balance, setBalance] = React.useState(null);
  const [enter, setEnter] = React.useState(false);

  React.useEffect(() => {
    if (enter) {
      setEnter(false);
      fetch(`http://localhost:8080/balance/${id}`)
        .then((res) => res.json())
        .then((balanceObj) => {
          console.log(balanceObj);
          setBalance(balanceObj.balance);
        });
    }
  }, [enter]);

  return (
    <div className={'card'}>
      <h3>Balance</h3>
      <input type='text' className={'text-input'} placeholder={`Enter your ${APPLICATION_NAME} ID...`} onChange={(event) => setId(event.target.value)}/>
      <input type='button' value='Enter' className={'btn'} onClick={() => setEnter(true)}/>
      <p className={'attention-good-text'}>{balance}{(balance || balance === 0) ? ` ${CURRENCY_ACRONYM}` : ''}</p>
    </div>
  );
}
