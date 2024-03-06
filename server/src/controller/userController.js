import User from "../model/userModel.js";

export const register = async (req, res) => {
    const { name, email,username, password,mobile } = req.body;
    const user = await User.create({
        name,
        email,
        username,
        password,
        mobile,
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            mobile: user.mobile,
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }

}


export const login = async (req, res) => {
    const {email,password}=req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            mobile: user.mobile,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }};

export const getAllUser= async (req, res) => {
    const users = await User.find({});
    res.json(users);
}
