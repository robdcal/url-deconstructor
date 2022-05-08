import { Fragment } from "react";

const UrlParts = ({ deconstructedUrl }) => {
  const { hostname, pathname, hash, search, searchParams } = deconstructedUrl;

  return (
    <Fragment>
      {deconstructedUrl.hostname ? (
        <Fragment>
          <h3>Basic URL Breakdown</h3>
          <table>
            <tbody>
              <tr>
                <td>Hostname</td>
                <td>{hostname}</td>
              </tr>
              {pathname ? (
                <tr>
                  <td>Pathname</td>
                  <td>{pathname}</td>
                </tr>
              ) : null}
              {hash ? (
                <tr>
                  <td>Hash</td>
                  <td>{hash}</td>
                </tr>
              ) : null}
              {search ? (
                <tr>
                  <td>Search</td>
                  <td>{search}</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </Fragment>
      ) : null}
      {deconstructedUrl.search ? (
        <Fragment>
          <h3>Query String Keys & Values</h3>
          <table>
            <tbody>
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
      ) : null}
    </Fragment>
  );
};

export default UrlParts;
