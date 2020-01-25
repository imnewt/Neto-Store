const User = require('../../models/user.model');
const UserSession = require('../../models/userSession.model');
module.exports.signup = (req, res, next) => {
    const { body } = req;
    let { name, email, password, phone, address, ic } = body;

    if(!name && !email && !password && !phone && !address && !ic) {
        return res.send({
            success: false,
            errorName: true,
            errorEmail: true,
            errorPassword: true,
            errorPhone: true,
            errorAddress: true,
            errorIc: true,
            message: 'Error: Fields cannot be blank'
        })
    }

    if(!name) {
        return res.send({
            success: false,
            errorName: true,
            message: 'Error: Name cannot be blank'
        })
    }

    if(!email) {
        return res.send({
            success: false,
            errorEmail: true,
            message: 'Error: Email cannot be blank'
        })
    }

    if(!password) {
        return res.send({
            success: false,
            errorPassword: true,
            message: 'Error: Password cannot be blank'
        })
    }

    if(!phone) {
        return res.send({
            success: false,
            errorPhone: true,
            message: 'Error: Phone cannot be blank'
        })
    }

    if(!address) {
        return res.send({
            success: false,
            errorAddress: true,
            message: 'Error: Address cannot be blank'
        })
    }

    if(!ic) {
        return res.send({
            success: false,
            errorIc: true,
            message: 'Error: Identity card(IC) cannot be blank'
        })
    }

    email = email.toLowerCase();

    User.find({
        email: email
    }, (err, previousUsers) => {
        if(err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            })
        }
        else if(previousUsers.length > 0) {
            return res.send({
                success: false,
                errorEmail: true,
                message: 'Error: Account already exist.'
            })
        }
        else {
            let newUser = new User();
            newUser.name = name
            newUser.email = email;
            newUser.password = newUser.generateHash(password);
            newUser.phone = phone;
            newUser.address = address;
            newUser.ic = ic;
            newUser.save((err, user) => {
                if(err) {
                    return res.send({
                        success: false,
                        message: 'Error: Server error.'
                    })
                } else {
                    return res.send({
                        success: true,
                        message: 'Signed Up'
                    })
                }
            })
        }
    })
};

module.exports.signin = (req, res, next) => {
    const { body } = req;
    let { email, password } = body;

    if(!email && !password) {
        return res.send({
            success: false,
            errorEmail: true,
            errorPassword: true,
            message: 'Error: Email & Password cannot be blank'
        })
    }

    if(!email) {
        return res.send({
            success: false,
            errorEmail: true,
            message: 'Error: Email cannot be blank'
        })
    }

    if(!password) {
        return res.send({
            success: false,
            errorPassword: true,
            message: 'Error: Password cannot be blank'
        })
    }

    email = email.toLowerCase();

    User.find({
        email: email
    }, (err, users) => {
        if(err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            })
        }

        // Find user exist in db
        if(users.length !== 1) {
            return res.send({
                success: false,
                errorEmail: true,
                message: 'Error: Email Invalid'
            })
        }

        // If user is found, compare password
        const user = users[0];
        if(!user.validPassword(password)) {
            return res.send({
                success: false,
                errorPassword: true,
                message: 'Error: Password Invalid'
            })
        }

        //If user, password are valid
        let userSession = new UserSession();
        userSession.userId = user._id;
        userSession.save((err, doc) => {
            if(err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                })
            }

            return res.send({
                success: true,
                message: 'Valid sign in',
                token: doc._id
            })
        })
    })
}

module.exports.verify = (req, res, next) => {
    const { query } = req;
    const { token } = query;
    
    UserSession.find({
        _id: token,
        isDeleted: false
    }, (err, sessions) => {
        if(err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            })
        }
        
        if(sessions.length !== 1) {
            return res.send({
                success: false,
                message: 'Error: Invalid'
            })
        }

        return res.send({
            success: true,
            message: 'Good'
        })
    });
}

module.exports.signout = (req, res, next) => {
    const { query } = req;
    const { token } = query;
    
    UserSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
    }, {
        $set: { isDeleted: true }
    }, null, (err, sessions) => {
        if(err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            })
        }

        return res.send({
            success: true,
            message: 'Good'
        })
    });
}