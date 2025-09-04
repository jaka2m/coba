export const rootDomain = "destimyangel.my.id"; // Ganti dengan domain utama kalian
export const serviceName = "mazlana";
export const urldomain = "https://"+serviceName+"."+rootDomain;// Ganti dengan nama workers kalian
export const apiKey = ""; // Ganti dengan Global API key kalian
export const apiEmail = "xnxx@gmail.com"; // Ganti dengan email yang kalian gunakan
export const accountID = ""; // Ganti dengan Account ID kalian
export const zoneID = ""; // Ganti dengan Zone ID kalian


// Constant
// ... existing code ...

export const APP_DOMAIN = `${serviceName}.${rootDomain}`;
export const PORTS = [443, 80];
export const PROTOCOLS = [reverse("najort"), reverse("sselv"), reverse("ss")];
export const KV_PROXY_URL = "https://raw.githubusercontent.com/FoolVPN-ID/Nautica/refs/heads/main/kvProxyList.json";
export const PROXY_BANK_URL = "https://raw.githubusercontent.com/FoolVPN-ID/Nautica/refs/heads/main/proxyList.txt";
export const DNS_SERVER_ADDRESS = "8.8.8.8";
export const DNS_SERVER_PORT = 53;
export const PROXY_HEALTH_CHECK_API = "https://id1.foolvpn.me/api/v1/check";
export const CONVERTER_URL = "https://nautica-tool.azurewebsites.net/api/v1/convert";
export const DONATE_LINK = "https://trakteer.id/dickymuliafiqri/tip";
export const PROXY_PER_PAGE = 24;
export const WS_READY_STATE_OPEN = 1;
export const WS_READY_STATE_CLOSING = 2;
export const CORS_HEADER_OPTIONS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
  "Access-Control-Max-Age": "86400",
};

function reverse(s) {
  return s.split("").reverse().join("");
}