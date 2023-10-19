const userView = "http://localhost:8000/";

export const loginService = async (data) => {
  try {
    const response = await fetch(`${userView}login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const loginUser = await response.json();
    return loginUser;
  } catch (e) {
    throw new Error(e);
  }
};

export const registerService = async (data) => {
  try {
    const response = await fetch(`${userView}user/user/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const registerUser = await response.json();
    return registerUser;
  } catch (e) {
    throw new Error(e);
  }
};


export const logoutService = async (token) => {
  try {
    const response = await fetch(`${userView}logout/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(token),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const logoutUser = await response.json();
    return logoutUser;
  } catch (e) {
    throw new Error(e);
  }
};
