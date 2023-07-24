export const getGreeting = async () => {
  const res = await fetch("/hello");
  return res.json();
};
