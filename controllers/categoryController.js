const category = require("../models/category");
const item = require("../models/item");
const async = require("async");

exports.category_list = (req, res, next) => {
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

exports.category_items = (req, res, next) => {
  async.parallel(
    {
      Category(callback) {
        category.findById(req.params.id).exec(callback);
      },
      Category_items(callback) {
        item.find({ category: req.params.id }).exec(callback);
      },
    },
    (err, results) => {
      if (err) {
        return next(err);
      }
      if (results.category === null) {
        const err = new Error("Category not found");
        err.status = 404;
        return next(err);
      }

      res.render("category_items", {
        title: "Category Items",
        category: results.Category,
        category_items: results.Category_items,
      });
    }
  );
};

exports.category_create_get = (req, res) => {
  res.render("category_create_form", {
    title: "Create new category",
  });
};

exports.category_create_post = (req, res, next) => {
  const Category = new category({
    name: req.body.name,
    description: req.body.description,
  });

  Category.save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect(Category.url);
  });
};

exports.category_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED");
};

exports.category_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED");
};

exports.category_update_get = (req, res, next) => {
  category.findById(req.params.id).exec((err, show_category) => {
    if (err) {
      return next(err);
    }
    res.render("category_update_form", {
      title: "Update category",
      category: show_category,
    });
  });
};

exports.category_update_post = (req, res, next) => {
  const Category = new category({
    name: req.body.name,
    description: req.body.description,
    _id: req.params.id,
  });

  category.findByIdAndUpdate(req.params.id, Category, (err, Category) => {
    if (err) {
      console.log(Category);
      return next(err);
    }
    res.redirect(Category.url);
  });
};
