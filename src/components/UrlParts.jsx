import { Fragment } from "react";

const UrlParts = ({ deconstructedUrl }) => {
  const { hostname, pathname, hash, search, searchParams } = deconstructedUrl;

  return (
    <Fragment>
      {/* {console.log(deconstructedUrl.hostname ? true : false)} */}
      {deconstructedUrl.hostname ? (
        <table>
          <tbody>
            <tr>
              <th colSpan={2}>
                <strong>Full URL</strong>
              </th>
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
              <th colSpan={2}>
                <strong>Query String Keys & Values</strong>
              </th>
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
      ) : null}
    </Fragment>
  );
};

export default UrlParts;
