var express = require('express');
var router = express.Router();

/* GET all user profiles */
router.get('/', function(req, res, next) {
	res.locals.connection.query('CALL `show_runner_dev_00`.`SP_USER_PROFILES`();', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500-ERROR status
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  			//If there is no error, all is good and response is 200-OK.
	  	}
  	});
});

/* GET a single user profile by user Login */
router.get('/:user_login', function(req, res, next) {
	res.locals.connection.query('CALL `show_runner_dev_00`.`SP_USER_PROFILE_BY_LOGIN`(\''+req.params.user_login+'\');', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500-ERROR status
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  			//If there is no error, all is good and response is 200-OK.
	  	}
  	});
});

module.exports = router;