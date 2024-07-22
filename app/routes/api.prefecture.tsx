import { json } from "@remix-run/react";
import axios from "axios";

export async function loader() {
  const res = await axios.get<unknown>(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    {
      headers: {
        "X-API-KEY": process.env.REACT_APP_RESAS_API_KEY,
      },
    },
  );

  return json(res.data);
}
