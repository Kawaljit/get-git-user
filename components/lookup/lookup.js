import { useRef } from 'react';
import './lookup.scss';

export default function Lookup(props) {
  const inputEl = useRef(null);
  function changeInputState() {
    props.setSearchText(inputEl.current.value)
  }
  return (
    <div className="lookup">
      <input
        placeholder="Enter github username"
        ref={inputEl}
        type="text"
        className="lookup__txt" />
      <button
        type="submit"
        className="lookup__btn"
        onClick={changeInputState}
      >
      </button>
    </div>
  )
};