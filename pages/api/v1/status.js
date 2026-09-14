function status(request, response) {
  response.status(200).json({ chave: "são tops" });
}

export default status;
