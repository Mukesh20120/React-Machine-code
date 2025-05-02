import React, { useCallback, useState } from "react";

export default function useStateWithValidation(validateFunc, initialValue) {
  const [state, setState] = useState(initialValue);
  const [valid, setValid] = useState(() => validateFunc(state));
  const onChange = useCallback(
    (nextState) => {
      const value =
        typeof nextState === "function" ? nextState(state) : nextState;
      setState(value);
      setValid(validateFunc(value));
    },
    [validateFunc]
  );
  return [state, onChange, valid];
}
