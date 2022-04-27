import { useState, useEffect, useCallback, useLayoutEffect, useRef } from 'react'

export default function useStateCallback(initialState) {
  const [state, setState] = useState(initialState);

  const cbQueueRef = useRef([]);

  function setStateAndCallback(value, cb) {
    cbQueueRef.current = [...cbQueueRef.current, cb];

    setState(value);
  }

  useEffect(() => {
    if (cbQueueRef.current.length > 0) {
      cbQueueRef.current.forEach((fn) => {
        if (typeof fn === "function") {
          fn(state);
          cbQueueRef.current.shift();
        }
      });
    }
  }, [state]);

  return [state, setStateAndCallback];
}
