export const getUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.NEXT_PUBLIC_SITE;
  }

  return process.env.VERCEL_URL;
};

export const getHttp = () => {
  if (process.env.NODE_ENV === "development") {
    return "";
  }
  return "https://";
};

export interface Data {
  api: {
    name: string;
  };
}
