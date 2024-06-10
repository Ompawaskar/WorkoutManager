const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

//static Signup Method
userSchema.statics.signup = async function (email, password) {
    //validation
    if (!email || !password) {
        throw Error("All Fields must be filled");
    }

    if (!validator.isEmail(email)) {
        throw Error("Enter a Valid Email")
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Enter a Strong Password")
    }

    const exsists = await this.findOne({ email });

    if (exsists) {
        throw Error("Email already exsists");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hash });

    return user
}

userSchema.statics.login = async function(email,password) {

    //Validation
    if (!email || !password) {
        throw Error("All Fields must be filled");
    }

    const user = await this.findOne({ email });

    if (!user) {
        throw Error("Incorrect Email");
    }

    const match = await bcrypt.compare(password,user.password);

    if(!match){
        throw Error("Incorrect Password")
    }
    
    return user
}

module.exports = mongoose.model('User', userSchema);
