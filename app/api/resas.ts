import { LabelData, Prefecture, PrefectureData } from "../types";

export const validatePrefectures = (data: unknown): Prefecture[] => {
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

  return validatedPrefectures;
};

export const validatePopulation = (data: unknown): PrefectureData => {
  if (data === null || typeof data !== "object") {
    return {};
  }

  if (
    !("result" in data) ||
    data.result === null ||
    typeof data.result !== "object"
  ) {
    return {};
  }

  if (
    !("data" in data.result) ||
    data.result.data === null ||
    !Array.isArray(data.result.data)
  ) {
    return {};
  }

  const arr: unknown[] = data.result.data;

  const validatedPrefectureData = arr
    .map((type: unknown) => {
      if (type === null || typeof type !== "object") {
        return;
      }

      if (!("label" in type) || typeof type.label !== "string") {
        return;
      }

      if (
        !("data" in type) ||
        type.data === null ||
        !Array.isArray(type.data)
      ) {
        return;
      }

      const labelData: LabelData[] = type.data
        .map((point: unknown) => {
          if (point === null || typeof point !== "object") {
            return;
          }

          if (!("year" in point) || !("value" in point)) {
            return;
          }

          if (
            typeof point.year !== "number" ||
            typeof point.value !== "number"
          ) {
            return;
          }

          return {
            year: point.year,
            population: point.value,
          };
        })
        .filter((x) => x !== undefined);

      return {
        [type.label]: labelData,
      };
    })
    .filter((x) => x !== undefined)
    .reduce((prev, cur) => ({ ...prev, ...cur }));

  return validatedPrefectureData;
};
