import React, { useEffect } from "react";
import { api } from "../../configuration/api";

function Source() {
  const [url, setUrl] = React.useState("");

  function getUrl() {
    api.get("/source").then((response) => {
      setUrl(response.data);
    });
  }

  useEffect(() => {
    getUrl();
  });

  return (
    <a href={url} target="_blank" rel="noreferrer">
      {url}
    </a>
  );
}

export default Source;
