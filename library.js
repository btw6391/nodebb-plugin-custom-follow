"use strict";

var controllers = require('./lib/controllers'),
	Categories = module.parent.require('./categories'),
	Settings = module.parent.require('./settings'),
	SocketAdmin = module.parent.require('./socket.io/admin'),
	User = module.parent.require('./user'),
	meta = module.parent.require('./meta');
	category = false,
	plugin = {};

plugin.init = function(params, callback) {
	var router = params.router,
		hostMiddleware = params.middleware,
		hostControllers = params.controllers;
		
	// We create two routes for every view. One API call, and the actual route itself.
	// Just add the buildHeader middleware to your route and NodeBB will take care of everything for you.

	router.get('/admin/plugins/customfollow', hostMiddleware.admin.buildHeader, controllers.renderAdminPage);
	router.get('/api/admin/plugins/customfollow', controllers.renderAdminPage);

	callback();
};
    
plugin.getCategories = function(params, uid, callback) {
	category = params;
    callback(null, params);
};

plugin.addAdminNavigation = function(header, callback) {
	header.plugins.push({
		route: '/plugins/customfollow',
		icon: 'fa-tint',
		name: 'Custom Follow'
	});

	callback(null, header);
};

// plugin.onUserCreate = function(data) {
// 	async.waterfall([
// 		function (next) {
// 			db.getSortedSetRange('categories:cid', 0, -1, next);
// 		},
// 		function (cids, next) {
// 			var now = Date.now();
// 			var nowArray = cids.map(function() {
// 				return now;
// 			});
// 			async.parallel([
// 				function (next) {
// 					db.sortedSetAdd('uid:' + data.user.uid + ':ignored:cids', nowArray, cids, next);
// 				},
// 				function (next) {
// 					var keys = cids.map(function (cid) {
// 						return 'cid:' + cid + ':ignorers';
// 					});
// 					db.sortedSetsAdd(keys, now, data.user.uid, next);
// 				}
// 			], next);
// 		}
// 	], function(err) {
// 		if (err) {
// 			winston.error(err);
// 		}
// 	});
// };

SocketAdmin.settings.syncMyPlugin = function() {
    mySettings.sync();
    console.log('sync settings');
};

module.exports = plugin;