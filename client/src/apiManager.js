export const getGreeting = async () => {
  const res = await fetch("/api/hello");
  return res.json();
};
