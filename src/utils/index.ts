export const API_URL =
  process.env.NEXT_PUBLIC_API_URL_RAIL_WAY || "http://localhost:5000";
// export const API_URL =
//   process.env.NEXT_PUBLIC_API_URL_CYCLIC || "http://localhost:5000";
// export const API_URL =
//   process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
// export const API_URL = "http://localhost:5000";

export const initials = (firstname: string, lastname: string) => {
  let f, l;
  f = firstname.split("");
  l = lastname.split("");
  return `${f[0]}${l[0]}`;
};

export const filterText = (text: string) => {
  const text1 = text.replaceAll("(", "\\(");
  const text2 = text1.replaceAll(")", "\\)");
  return text2;
};
