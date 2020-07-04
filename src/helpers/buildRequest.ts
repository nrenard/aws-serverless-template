export default ({ statusCode = 200, data }) => ({
  statusCode,
  body: JSON.stringify(data),
});
