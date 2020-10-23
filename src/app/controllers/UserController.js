import User from '../models/User'

class UserController {
    async store(req, res) {
        const userExist = await User.findOne({ where: { email: req.body.email } })

        if (userExist) {
            return res.status(401).json({ error: 'Email já cadastrado!' })
        }

        const { id, name, email } = await User.create(req.body)
        return res.json({id, name, email})
    }
}

export default new UserController()