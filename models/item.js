const { Schema, model } = require(`mongoose`);

const itemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: [{ type: Schema.Types.ObjectId, ref: "category" }],
  price: { type: Number, required: true },
  number_in_stock: { type: Number, required: true },
});

itemSchema.virtual("url").get(function () {
  return "/item/" + this.id;
});

module.exports = model("item", itemSchema);
