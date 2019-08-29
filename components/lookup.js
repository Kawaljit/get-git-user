import { useRef } from 'react';

export default function Lookup(props) {
  const inputEl = useRef(null);
  function changeInputState() {
    props.setSearchText(inputEl.current.value)
  }
  return (
    <div>
      <input
        ref={inputEl}
        type="text"
        className="inputText" />
        <button type="submit" onClick={changeInputState}>
          submit
        </button>
    </div>
  )
};