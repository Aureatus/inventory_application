const { Router } = require("express");

const {
  item_detail,
  item_create_get,
  item_create_post,
  item_delete_get,
  item_delete_post,
  item_update_get,
  item_update_post,
} = require("../controllers/itemController");

const router = Router();

router.get("/:id/create", item_create_get);

router.post("/:id/create", item_create_post);

router.get("/:id/delete", item_delete_get);

router.post("/:id/delete", item_delete_post);

router.get("/:id/update", item_update_get);

router.post("/:id/update", item_update_post);

router.get("/:id/", item_detail);

module.exports = router;
