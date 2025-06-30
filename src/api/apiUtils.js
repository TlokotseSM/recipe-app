export const handleApiError = (error) => {
  console.error('API Error:', error);
  throw new Error(error.message || 'API request failed');
};

export const validateResponse = (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};