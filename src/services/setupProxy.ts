import createProxyMiddleware from "http-proxy-middleware";

export const useMiddleware = (app: JSX.IntrinsicElements) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );
};