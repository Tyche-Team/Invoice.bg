/* globals module */
"user strict";

module.exports = function (data) {
    return {
        getProfile(req, res) {
            res.send("<h1>Profilе page</h1>");
        },
        getUserSettings(req, res) {
            res.send("<h1>User Settings</h1>");
        },
        changeUserSettings(req, res) {
            res.send("<h1> Changed user settings");
        }
    }
}