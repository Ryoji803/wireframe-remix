import { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/react";
import axios from "axios";

export async function loader(args: LoaderFunctionArgs) {
  if (args.params.prefectureCode === undefined) {
    return json({});
  }

  const res = await axios.get<unknown>(
    "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear",
    {
      headers: {
        "X-API-KEY": process.env.REACT_APP_RESAS_API_KEY,
      },
      params: {
        prefCode: args.params.prefectureCode,
        cityCode: "-",
      },
    },
  );

  return json(res.data);
}
