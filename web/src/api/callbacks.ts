/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const BASE_URL = "http://localhost:8080";
const ERROR_MESSAGE = "Error in API Call";

// Interfaces
export interface SignupParams {
  Name: string;
  Username: string;
  Password: string;
  PhoneNo:  string;
  Designation: string;
}

export interface LoginParams {
  Username: string;
  Password: string;
}

export interface ChannelParams {
  Name: string;
  Description: string;
}

export interface MessageParams {
  Content: string;
  ChannelId: string;
}

export interface Response {
  Payload?: any;
  Status: any;
}

// API
const postSignup = async (params: SignupParams): Promise<Response> => {
  let status;
  await axios
    .post(BASE_URL + "/user/signup", {
      Name: params.Name,
      Password: params.Password,
      Username: params.Username,
    })
    .then((res) => {
      status = res.status;
    })
    .catch((err) => {
      status = err?.response?.status ?? 500;
    });
  const response: Response = {
    Status: status,
  };
  return response;
};

const postLogin = async (params: LoginParams): Promise<Response> => {
  let payload = "",
    status;
  await axios
    .post(BASE_URL + "/user/login", {
      RollNo: params.Username,
      Password: params.Password,
    })
    .then((res) => {
      payload = res.data?.token;
      localStorage.setItem("token", payload);
      status = res.status;
    })
    .catch((err) => {
      payload = err?.response?.data.error ?? ERROR_MESSAGE;
      status = err?.response?.status ?? 500;
    });

  const response: Response = {
    Payload: payload,
    Status: status,
  };

  return response;
};

const postChannel = async (channelParams: ChannelParams): Promise<Response> => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const bodyParameters = {
    Name: channelParams.Name,
    Description: channelParams.Description,
  };

  let status;
  await axios
    .post(BASE_URL + "/channel", bodyParameters, config)
    .then((res) => {
      status = res.status;
    })
    .catch((err) => {
      status = err?.response?.status ?? 500;
    });

  const response: Response = {
    Status: status,
  };

  return response;
};

const getChannels = async (): Promise<Response> => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  let status, payload;
  await axios
    .get(BASE_URL + "/channels", config)
    .then((res) => {
      payload = res.data;
      status = res.status;
    })
    .catch((err) => {
      payload = err?.response?.data.error ?? ERROR_MESSAGE;
      status = err?.response?.status ?? 500;
    });

  const response: Response = {
    Payload: payload,
    Status: status,
  };
  return response;
};

const getMessages = async (channelId: string): Promise<Response> => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  let status, payload;
  await axios
    .get(BASE_URL + `/channel/${channelId}/messages`, config)
    .then((res) => {
      payload = res.data;
      status = res.status;
    })
    .catch((err) => {
      payload = err?.response?.data.error ?? ERROR_MESSAGE;
      status = err?.response?.status ?? 500;
    });

  const response: Response = {
    Payload: payload,
    Status: status,
  };
  return response;
};

const postMessage = async (message: MessageParams): Promise<Response> => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const bodyParameters = {
    Content: message.Content,
    SentAt: +new Date(),
  };

  let status, payload;
  await axios
    .post(BASE_URL + `channel/${message.ChannelId}/message`, bodyParameters, config)
    .then((res) => {
      payload = res.data;
      status = res.status;
    })
    .catch((err) => {
      payload = err?.response?.data.error ?? ERROR_MESSAGE;
      status = err?.response?.status ?? 500;
    });

  const response: Response = {
    Payload: payload,
    Status: status,
  };
  return response;
};

export {
  postSignup,
  postLogin,
  postChannel,
  getChannels,
  getMessages,
  postMessage,
};
