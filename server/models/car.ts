import * as mongoose from 'mongoose'
const CarSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: [true,"please enter the name"],
    maxlength: [50, 'todo name cannot be more than 100 characters'],
    minlength: [3, 'todo name cannot be less than 3 characters'],
  },
  model: {
    type: String,
    required: [true,"please enter the model"],
  },
property:{
  type:String,
  default: "no property"
},
image:{
    type:String,
    required: [true,"please enter the image link address"],
}

})
const Car = mongoose.models.Car || mongoose.model('Car', CarSchema)
export default Car;