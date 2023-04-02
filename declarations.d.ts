declare module "react";
declare module "react-router-dom"
declare module "react/jsx-runtime";
declare module "react-dom/client";
declare module "http-proxy-middleware";

declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any;
    }
}