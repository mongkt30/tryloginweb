const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const UserSchema = new mongoose.Schema({

  email:{
    type: 'string',
    lowercase:true,
    unique:true,
    required:[true,"Can't be blank"],
    // match:[/\S+@\S+\.S+/, 'is invalid'],
    index:true
  },

  password:{
    type:'string',
    required:[true, "Can't be blank"]
  },

  token:[],

  articles: [{type:mongoose.Schema.Types.ObjectId, ref:'BlogPost'}]

})

UserSchema.pre('save',function(next){
  const user = this;
  if(!user.isModified('password')) return next();
  // if user being created, or updated
    bcrypt.genSalt(10, function(err,salt){
      if(err) return next(err)

    bcrypt.hash(user.password,salt ,function(err,hash){
      if(err) return next(err);

      user.password = hash
      next();

    })
  })

})

UserSchema.methods.toJSON = function(){
  const user = this;
  const userObject = user.toObject()
  delete userObject.password;
  delete userObject.tokens;
  delete userObject.articles;
  return userObject;
}

UserSchema.methods.generateAuthToken = async function() {
  const user = this ;
  console.log('user is',user)
  const token = jwt.sign({_id:user._id.toString()}, 'appSecret')
  user.token = user.token.concat({token});
  await user.save();
  return token;
}

UserSchema.statics.findByCredentials = async function (email,password) {
  const user= await User.findOne({email})
  if(!user)throw new Error('Invalid email or password')
  const isMatch = await bcrypt.compare(password, user.password)
  if(!isMatch) throw new Error('Invalid email or password')
  // if there is a Match
  return user
}

const User = mongoose.model('User',UserSchema)

module.exports = User;
