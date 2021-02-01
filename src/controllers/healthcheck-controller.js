class HealthcheckController {
    ping(req, res) {
        try {
            return res.status(200).send({
                message: 'pong'
            });
        } catch (e) {
            return res.status(500).send({
                message: 'server error'
            });
        }
    }
}

module.exports = HealthcheckController;
