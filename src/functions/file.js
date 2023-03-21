import axios from "axios";

export const create_document = async (data, authtoken) =>
  await axios({
    method: "POST",
    url: process.env.REACT_APP_SERVER_API + "/create_document",
    data: data,
    headers: {
      authtoken,
    },
  });

export const get_document = async (value, authtoken) =>
  await axios({
    method: "POST",
    url: process.env.REACT_APP_SERVER_API + "/get_document",
    data: {
      userid : value
    },
    headers: {
      authtoken,
    },
  });
