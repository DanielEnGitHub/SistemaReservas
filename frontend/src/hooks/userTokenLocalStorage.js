export function useTokenLocalStorage(tokenKey) {
  const createToken = (tokenValue) => {
    localStorage.setItem(tokenKey, tokenValue);
  };

  const getToken = () => {
    return localStorage.getItem(tokenKey);
  };

  const removeToken = () => {
    localStorage.removeItem(tokenKey);
  };

  return { createToken, getToken, removeToken };
}
