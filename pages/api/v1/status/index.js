function status(request, response) {
  response.status(200).json({ result: "hello world!" });
}

export default status;
