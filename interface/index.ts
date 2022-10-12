export const getUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.NEXT_PUBLIC_SITE;
  }

  return process.env.VERCEL_URL;
};

export interface Data {
  api: {
    name: string;
  };
}
