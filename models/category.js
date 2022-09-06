const Schema = require(`mongoose`);

const categorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

categorySchema.virtual("url").get(function () {
  return "/category/" + this.id;
});

module.exports = mongoose.model("category", categorySchema);
