const category = require("../models/category");
const item = require("../models/item");
const async = require("async");

exports.item_detail = (req, res, next) => {
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

exports.item_delete_get = (req, res, next) => {
  item.findById(req.params.id).exec((err, show_item) => {
    if (err) {
      return next(err);
    }
    res.render("item_delete", {
      name: show_item.name,
    });
  });
};

exports.item_delete_post = (req, res, next) => {
  item.findByIdAndDelete(req.params.id).exec((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/categories");
  });
};

exports.item_update_get = (req, res, next) => {
  async.parallel(
    {
      Item(callback) {
        item.findById(req.params.id).populate("category").exec(callback);
      },
      Categories(callback) {
        category.find(callback);
      },
    },
    (err, results) => {
      if (err) {
        return next(err);
      }

      res.render("item_update_form", {
        title: "Update item",
        item: results.Item,
        categories: results.Categories,
      });
    }
  );
};

exports.item_update_post = (req, res, next) => {
  const Item = new item({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    number_in_stock: req.body.number_in_stock,
    _id: req.params.id,
  });

  item.findByIdAndUpdate(req.params.id, Item, (err, Item) => {
    if (err) {
      return next(err);
    }
    res.redirect(Item.url);
  });
};
