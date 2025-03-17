const https = require("https");

function loaderData(url, callback) {
  const result = {
    data: [],
    isLoading: true,
    error: null,
  };

  https
    .get(url, (resp) => {
      let data = "";

      resp.on("data", (dataChunk) => {
        data += dataChunk;
      });

      resp.on("end", () => {
        try {
          result.data = JSON.parse(data);
        } catch (error) {
          result.error = "Ошибка при разборе JSON";
        } finally {
          result.isLoading = false;
          callback(result);
        }
      });
    })
    .on("error", (err) => {
      result.error = err.message;
      result.isLoading = false;
      callback(result);
    });
}

module.exports = { loaderData };
