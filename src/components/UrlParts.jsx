import { Fragment } from "react";

const UrlParts = ({ deconstructedUrl }) => {
  const { hostname, pathname, hash, search, searchParams } = deconstructedUrl;

  return (
    <Fragment>
      <table>
        <tbody>
          <tr>
            <td colSpan={2}>
              <strong>Full URL</strong>
            </td>
          </tr>
          <tr>
            <td>Hostname</td>
            <td>{hostname}</td>
          </tr>
          <tr>
            <td>Pathname</td>
            <td>{pathname}</td>
          </tr>
          <tr>
            <td>Hash</td>
            <td>{hash}</td>
          </tr>
          <tr>
            <td>Search</td>
            <td>{search}</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <strong>Query String Keys & Values</strong>
            </td>
          </tr>
          {Array.from(searchParams.entries()).map((item, index) => {
            return (
              <tr key={index}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default UrlParts;
