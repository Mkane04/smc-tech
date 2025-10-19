export const required = (msg = "Champ requis") => (v) => !v ? msg : null;

export const email = (msg = "Email invalide") => (v) => {
  if (!v) return msg;
  const re = /^(?:[a-zA-Z0-9_'^&\/+-])+(?:\.(?:[a-zA-Z0-9_'^&\/+-])+)*@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/;
  return re.test(String(v).toLowerCase()) ? null : msg;
};

export const minLength = (n, msg = `Minimum ${n} caractères`) => (v) => (v && String(v).length >= n ? null : msg);
