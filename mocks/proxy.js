exports.fakeProxy = (req, res) => {
    return res.status(200).send({ message: 'ok' });
};
