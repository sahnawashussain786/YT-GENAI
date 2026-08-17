import userModel from "../models/user.model";

/**
 * @name-registerUserController
 * @description register a new user
 * @access public
 */

async function registerUserController(req, res) {
    const {username, email, password} = req.body

    if(!username || !email ||!password){
        return res.status(400).json({
            message:"Please provide username, email and password"
        })
    }
}

export default { registerUserController };
