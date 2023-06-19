const express = require ('express');
const router = express.Router();
const JAZZY = require ('../model/jazzyModel.js');
const {create_route, all_route, specific_route, delete_route, update_post,} = require ('../controller/jazzyController.js');


// for create
router.post ('/create', create_route);

router.get ('/allpost',all_route);

router.get ('/specificpost/:postId', specific_route);

router.delete('/deletepost/:postId',delete_route);

router.patch ('/updatepost/:postId',update_post);


module.exports = router;
