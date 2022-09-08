const item = require("../models/item");

exports.item_detail = (req, res) => {
  item.findById(req.params.id).exec((err, show_item) => {
    if (err) {
      return next(err);
    }
    res.render("item_detail", {
      title: "Item Detail",
      item_detail: show_item,
    });
  });
};

exports.item_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED");
};

exports.item_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED");
};

exports.item_delete_get = (req, res) => {
  item.findById(req.params.id).exec((err, show_item) => {
    if (err) {
      return next(err);
    }
    res.render("item_delete", {
      name: show_item.name,
    });
  });
};

exports.item_delete_post = (req, res) => {
  item.findByIdAndDelete(req.params.id).exec((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/categories");
  });
};

exports.item_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED");
};

exports.item_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED");
};
