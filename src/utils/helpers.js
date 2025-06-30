export const formatTime = (minutes) => {
  if (minutes < 60) return `${minutes} mins`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};