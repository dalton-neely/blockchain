import React from 'react';

export default function Transaction() {
  const [toId, setToId] = React.useState(null);
  const [fromId, setFromId] = React.useState(null);
  const [send, setSend] = React.useState(false);
  const [status, setStatus] = React.useState(null);

  React.useEffect(() => {
    if (send) {
      setSend(false);
      setStatus('completed');
    }
  }, [send]);

  return (
    <div className={'card'}>
      <h3>Transaction</h3>
      <input type={'text'} className={'text-input'} placeholder={'From ID...'} onChange={(event) => setFromId(event.target.value)}/>
      <input type={'text'} className={'text-input'} placeholder={'To ID...'} onChange={(event) => setToId(event.target.value)}/>
      <input type='button' value='Send' className={'btn'} onClick={() => setSend(true)}/>
      <p className={'attention-good-text'}>{status}</p>
    </div>
  );
}
