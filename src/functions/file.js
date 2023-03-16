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
