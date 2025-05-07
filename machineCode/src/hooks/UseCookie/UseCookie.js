import React, { useCallback, useState } from "react";

export default function UseCookie(name, defaultValue) {
  const [value, setValue] = useState(() => {
    const cookieArray = document.cookie.split("; ");
    const cookie = cookieArray.find((cookie) => cookie.startsWith(name + "="));
    return cookie ? decodeURIComponent(cookie).split("=")[1] : defaultValue;
  });

  const updateCookie = useCallback(
    (value, day=1, path = "/") => {
      const expires = new Date();
      expires.setTime(expires.getTime() + day * 24 * 60 * 60 * 1000);
      document.cookie = `${name}=${encodeURIComponent(
        value
      )}; expires=${expires.toUTCString()}; path=${path}`;
      setValue(value);
    },
    [name]
  );

  const removeCookie = useCallback((path='/')=>{
    document.cookie = `${name}=; expire=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`
  },[name]);

  return [value,updateCookie,removeCookie];
}
