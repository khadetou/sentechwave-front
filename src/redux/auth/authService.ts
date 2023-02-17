import axios from "axios";
import cookie from "js-cookie";
import { API_URL } from "utils/index";

const getUser = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(`${API_URL}/auth/user`, config);

  const data = await res.json();

  return { data, token };
};

const getAllUsers = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(`${API_URL}/auth/users`, config);
  const data = await res.json();
  return data;
};

const getUserById = async (id: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await fetch(`${API_URL}/auth/users/${id}`, config);
  const data = res.json();
  return data;
};

const updateUser = async (token: string, profileData: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.put(
    `${API_URL}/auth/user/profile`,
    profileData,
    config
  );
  return data;
};

const register = async (userData: any) => {
  const { data } = await axios.post(`${API_URL}/auth/signup`, userData);
  return data;
};

const login = async (userData: any) => {
  const { data } = await axios.post(`${API_URL}/auth/signin`, userData);
  if (data) {
    setCookie("token", data.accessToken);
    localStorage.setItem("token", JSON.stringify(data));
  }

  return data;
};

const googleLogin = async (token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data: userInfo } = await axios.get(
    "https://www.googleapis.com/oauth2/v3/userinfo",
    config
  );

  if (userInfo) {
    const { data } = await axios.post(`${API_URL}/auth/login`, userInfo);
    if (data) {
      setCookie("token", data.accessToken);
      localStorage.setItem("token", JSON.stringify(data));
    }
    return data;
  } else {
    return userInfo;
  }
};

const logout = () => {
  removeCookie("token");
  localStorage.removeItem("token");
};

// FORGOT PASSWORD
const forgotPassword = async (email: string) => {
  const { data } = await axios.post(`${API_URL}/auth/forgot-password`, {
    email,
  });
  return data;
};

// RESET PASSWORD
const resetPassword = async (token: string, password: string) => {
  const { data } = await axios.put(`${API_URL}/auth/confirm-email/${token}`, {
    password,
  });
  return data;
};

// SEND MESSAGE
const sendMessage = async (messageData: any) => {
  const { data } = await axios.post(
    `${API_URL}/auth/send-message`,
    messageData
  );
  return data;
};

//SET COOKIE

export const setCookie = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    cookie.set(key, value, {
      expires: 1,
      path: "/",
    });
  }
};

export const removeCookie = (key: string) => {
  if (typeof window !== "undefined") {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

const getCookieFromBrowser = (key: string) => {
  return cookie.get(key);
};

const getCookieFromServer = (key: string, req: any) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(";")
    .find((c: any) => c.trim().startsWith(`${key}=`));

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split("=")[1];
};

export const getCookie = (key: string, req: any) => {
  return typeof window !== "undefined"
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

// DELETE USER
export const deleteUser = async (id: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.delete(`${API_URL}/auth/users/${id}`, config);
  return data;
};

const authService = {
  register,
  logout,
  login,
  getUser,
  getAllUsers,
  getUserById,
  getCookie,
  removeCookie,
  setCookie,
  forgotPassword,
  resetPassword,
  updateUser,
  sendMessage,
  deleteUser,
  googleLogin,
};

export default authService;
