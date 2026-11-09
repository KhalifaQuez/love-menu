const cloud = require("wx-server-sdk");
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const folder = "cloud://cloud1-d1ghxomjpdc12aba6.636c-cloud1-d1ghxomjpdc12aba6-1521210382/image/";

exports.main = async () => {
  const ids = Array.from({ length: 109 }, (_, i) =>
    folder + "Food" + String(i + 1).padStart(2, "0") + ".jpg"
  );
  const batches = [];
  for (let start = 0; start < ids.length; start += 50) {
    batches.push(cloud.getTempFileURL({ fileList: ids.slice(start, start + 50) }));
  }
  const results = await Promise.all(batches);
  return { files: results.reduce((files, result) => files.concat(result.fileList), []) };
};