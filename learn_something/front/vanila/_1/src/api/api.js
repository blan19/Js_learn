const API_END_POINT = 'http://localhost:3000';

export const request = async (url, option = {}) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, option);
    if (res.ok) {
      const json = await res.json();
      return json;
    }
    throw new Error('failed api request');
  } catch (e) {
    alert(e.message);
  }
};
