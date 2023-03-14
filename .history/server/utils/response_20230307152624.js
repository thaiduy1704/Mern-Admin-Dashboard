//200
const successCode = (res, data) => {
  let dSend = {
    messager: "Succesful",
    data: data,
  };
  res.status(200).send(dSend);
};
