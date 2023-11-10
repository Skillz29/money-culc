const API_URL = "https://caramel-balsam-ant.glitch.me/api";

 export const getData = async (url) => {
  try {
    const response = await fetch(`${API_URL}${url}`)
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`)
    }

    return await response.json();

  } catch (error) {
    console.error('Ошибка получения адреса:', error);
    throw error;
  }
};

export const postData = async (url, data) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`)
    }

    return await response.json();

  } catch (error) {
    console.error('Ошибка отправки данных:', error);
    throw error;
  }
};

export const delData = async (url) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`)
    }

    return await response.json();

  } catch (error) {
    console.error('Ошибка удалении данных:', error);
    throw error;
  }
};