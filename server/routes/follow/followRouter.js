const express = require('express'),
router = express.Router(),
dbSession = require('./../../modules/dbSession');

/**
 * isFollowing route
 * 
 * @response 
 *    true if followerId and userId is in UserFollower table
 *    otherwise false
 */
router.get('/isFollowing/:userId/:followerId/', (req, res)=> {
  const {userId} = req.params;
  const {followerId} = req.params;
  const query = "CALL isFollowing(?, ?);";
  dbSession.connection.query(query, [userId, followerId], (err, results) => {
  	if(err){throw err;}


  	if(results[0].length < 1){
  		console.log("nil");
  		res.json({resIsFollowing: false});
  	}else{
  		res.json({resIsFollowing: true});
  	}
  })
});


function runQuery(query, userId, followerId){
	dbSession.connection.query(query, [userId, followerId], (err, result)=>{
		if(err){throw err;}

		res.json(result);
	})
}

router.route('/:userId/:followerId/')
	.post((req, res) => {
		const {userId, followerId} = req.params;
  		const query = "INSERT INTO UserFollower(userId, followerId) VALUES(?, ?);";
  		runQuery(query, userId, followerId);
	})
	.delete((req, res)=> {
		const {userId, followerId} = req.params;
		const query = "DELETE FROM UserFollower WHERE userId = ? and followerId = ?;";
		runQuery(query, userId, followerId);
	});





module.exports = router;