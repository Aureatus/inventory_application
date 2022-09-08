const { Router } = require("express");
const {
  category_list,
  category_items,
  category_create_get,
  category_create_post,
  category_delete_get,
  category_delete_post,
  category_update_get,
  category_update_post,
} = require("../controllers/categoryController");

const router = Router();

router.get("/create", category_create_get);

router.post("/create", category_create_post);

router.get("/:id/delete", category_delete_get);

router.post("/:id/delete", category_delete_post);

router.get("/:id/update", category_update_get);

router.post("/:id/update", category_update_post);

router.get("/:id", category_items);

router.get("/", category_list);

module.exports = router;
