import React from 'react';

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
    <div>
      <h1>Balance Page</h1>
      <span>Enter your ID to view your balance: </span>
      <input type='text' onChange={(event) => setId(event.target.value)}/>
      <input type='button' value='Enter' onClick={() => setEnter(true)}/>
      <p>Entered value for ID: {id}</p>
      <p>Balance: {balance}</p>
    </div>
  );
}
