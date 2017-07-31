const sampleUsers = [
  { id: 0,
    name: 'bob',
    email: 'bob@bob.com' },
  { id: 1,
    name: 'linda',
    email: 'linda@linda.com' },
  { id: 2,
    name: 'bill',
    email: 'bill@bill.com' }
  ];

exports.index = function (req, res, next) {
  return res.status(200).send({ users: sampleUsers });
}

exports.show = function (req, res, next) {
  if (req.params.id > 2) {
    return res.status(404).send({ message: 'user not found '});
  } else {
    return res.status(200).send({ user: sampleUsers[parseInt(req.params.id)] });
  }
}

exports.helloWorld = function (req, res, next) {
  return res.status(200).send({ message: 'hello world' });
}