export function logConsent(userId, legalVersion) {
  const record = {
    userId,
    legalVersion,
    date: new Date().toISOString(),
    ip: "auto" // Esto se reemplazaría con IP real en backend
  };
  console.log("Consentimiento registrado:", record);
  localStorage.setItem(`consent_${userId}`, JSON.stringify(record));
}
