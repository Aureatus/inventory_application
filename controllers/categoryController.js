const category = require("../models/category");

exports.category_list = (req, res) => {
  category
    .find()
    .sort({ name: "asc" })
    .exec((err, list_categories) => {
      if (err) {
        return next(err);
      }

      res.render("category_list", {
        title: "Category list",
        category_list: list_categories,
      });
    });
};

exports.category_detail = (req, res) => {
  res.send("NOT IMPLEMENTED");
};

exports.category_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED");
};

exports.category_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED");
};

exports.category_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED");
};

exports.category_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED");
};

exports.category_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED");
};

exports.category_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED");
};
