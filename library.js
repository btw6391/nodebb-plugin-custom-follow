"use strict";

var controllers = require('./lib/controllers'),
	categories = false,
	plugin = {};

plugin.init = function(params, callback) {
	var router = params.router,
		hostMiddleware = params.middleware,
		hostControllers = params.controllers;

	router.get('/admin/plugins/customfollow', hostMiddleware.admin.buildHeader, controllers.renderAdminPage);
	router.get('/api/admin/plugins/customfollow', controllers.renderAdminPage);

	callback();
};

plugin.addAdminNavigation = function(header, callback) {
	header.plugins.push({
		route: '/plugins/customfollow',
		icon: 'fa-tint',
		name: 'Custom Follow'
	});

	callback(null, header);
};

plugin.getCategories = function(params, callback) {
	console.log("Testing...!");
	categories = params;
	console.log(categories);
    callback(null, params);
};

module.exports = plugin;