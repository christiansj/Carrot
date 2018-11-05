const express = require("express"),
router = express.Router(),
dbSession = require("./../../modules/dbSession");

router.route("/doesExist/:id")
	.get(function(req, res){
		var query = "SELECT name, facebookUserId from FacebookUser WHERE facebookUserId = ?";

		dbSession.connection.query(query, [req.params.id], function(err, result){
		if(err && result !== null){
			throw new Error("MYSQL Error" + err);
		}
		if(result.length < 1){
			res.json({doesExist: false})
		}else{
			res.json({doesExist: true});
		}
		
	});
})
module.exports = router;