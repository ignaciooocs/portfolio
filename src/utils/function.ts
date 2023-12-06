export const handleSendEmail = (email: string) => {
  window.location.href = `mailto:${email}`;
};