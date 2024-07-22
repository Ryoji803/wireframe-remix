import { Prefecture } from "../types";

export const validatePrefectures = (data: unknown): Prefecture[] => {
  // const res = await axios.get<unknown>(
  //   "https://opendata.resas-portal.go.jp/api/v1/prefectures",
  //   {
  //     headers: {
  //       "X-API-KEY": process.env.REACT_APP_RESAS_API_KEY,
  //     },
  //   },
  // );

  if (data === null || typeof data !== "object") {
    return [];
  }

  if (!("result" in data)) {
    return [];
  }

  if (!Array.isArray(data.result)) {
    return [];
  }

  const arr: unknown[] = data.result;

  const validatedPrefectures = arr
    .map((pref: unknown) => {
      if (pref === null || typeof pref !== "object") {
        return;
      }

      if (!("prefCode" in pref) || !("prefName" in pref)) {
        return;
      }

      if (
        typeof pref.prefCode !== "number" ||
        typeof pref.prefName !== "string"
      ) {
        return;
      }

      return {
        code: pref.prefCode,
        name: pref.prefName,
      };
    })
    .filter((x) => x !== undefined);

  // console.log(validatedPrefectures);

  return validatedPrefectures;
};
