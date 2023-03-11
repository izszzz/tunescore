export const convertAffiliateLink = (url: string) => {
  const parsedUrl = new URL(url);
  parsedUrl.hostname = "geo.music.apple.com";
  parsedUrl.searchParams.set("at", "1000l38Sn");
  const path = parsedUrl.pathname.split("/");
  parsedUrl.searchParams.set("ct", path[1] + "_" + path[2]);
  parsedUrl.searchParams.set("app", path[1] + "_" + path[2]);
  return parsedUrl;
};
