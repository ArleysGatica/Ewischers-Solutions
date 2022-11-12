const { Schema, model } = require("mongoose");

const WorkingSchema = new Schema({
  Name: String,
  Status: String,
  Image: String,
  Designation: String,
  Country: String,
  HireDate: Date,
  reportsTo: String,

  kanbans: {
    type: Schema.Types.ObjectId,
    ref: "Kanban",
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

WorkingSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Working = model("Working", WorkingSchema);

module.exports = Working;
