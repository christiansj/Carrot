const express = require("express"),
router = express.Router(),
dbSession = require("./../../modules/dbSession"),
authMod = require("./../../modules/authorization/authorizationModule");
/**
 * Check if a Facebook account is registered in the database.
 */
router.route("/doesExist/:id")
	.get(function(req, res){
		var query = "SELECT authorizationId from Authorization WHERE authorizationId = ? and networkName = ?";

		dbSession.connection.query(query, [req.params.id, "Facebook"], function(err, result){
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