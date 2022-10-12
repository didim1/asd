export const getUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.NEXT_PUBLIC_SITE;
  }

  return process.env.NEXT_PUBLIC_VERCEL_URL;
};

export interface Data {
  name: string;
}
