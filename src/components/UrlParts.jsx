import { Fragment } from "react";
import UrlPart from "./UrlPart";

const UrlParts = ({ deconstructedUrl }) => {
  const { hostname, pathname, hash, search, searchParams } = deconstructedUrl;

  return (
    <Fragment>
      {/* <UrlPart label={"Protocol"}></UrlPart>
      <UrlPart label={"Subdomain"}></UrlPart>
      <UrlPart label={"Domain"}></UrlPart> */}
      <UrlPart label={"Hostname"} value={hostname}></UrlPart>
      <UrlPart label={"Pathname"} value={pathname}></UrlPart>
      <UrlPart label={"Hash"} value={hash}></UrlPart>
    </Fragment>
  );
};

export default UrlParts;
