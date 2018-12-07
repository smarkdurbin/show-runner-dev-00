var express = require('express');
var router = express.Router();

/* POST authenticate a single user profile by user_login */
router.post('/', function(req, res, next) {
	res.locals.connection.query('CALL `show_runner_dev_00`.`SP_AUTHENTICATE_USER`(\''+req.body.login+'\',\''+req.body.pass+'\');', function (error, results, fields) {
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