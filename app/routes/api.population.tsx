import { json } from "@remix-run/react";
import axios from "axios";

export async function loader(/*prefectureCode: string*/) {
  const res = await axios.get<unknown>(
    "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear",
    {
      headers: {
        "X-API-KEY": process.env.REACT_APP_RESAS_API_KEY,
      },
      params: {
        prefCode: 1,
        // prefCode: prefectureCode,
        cityCode: "-",
      },
    },
  );

  return json(res.data);
}
