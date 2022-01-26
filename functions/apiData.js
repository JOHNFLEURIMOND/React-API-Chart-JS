const headers = {
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*"
};

export async function handler() {
  const Data = [];
  const baseUrl = "https://setfive-public.s3.amazonaws.com/api.json";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  await fetch(`${proxyUrl}${baseUrl}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  })
    .then(response => {
      if (response.ok) {
        response.json().then(json => {
          for (const dataObj of json) {
            if (
              dataObj["name"] === "Taven 730" ||
              dataObj["name"] === "ABC Pizza"
            ) {
              Data.push(dataObj);
            }
          }
          return Data;
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
  return {
    body: JSON.stringify(Data),
    statusCode: 200,
    headers: headers
  };
}
