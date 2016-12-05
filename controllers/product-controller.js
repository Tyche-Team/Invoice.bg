/* globals module */
"user strict";

module.exports = function(data) {
    return {
        getProductByPattern(req, res) {
            if (req.user) {
                data.getProductByPattern(req.params.pattern, req.user.username)
                    .then(products => {
                        if (products) {
                            res.type('jsonp');
                            res.jsonp(products);
                        }
                    });
            } else {
                res.type('jsonp');
                res.jsonp({});
            }
        }
    };
};