"use strict";

var Categories = module.parent.require('./categories'),
	categories = false,
	plugin = {};

plugin.init = function(params, callback) {
	var app = params.router,
		middleware = params.middleware,
		controllers = params.controllers;
		
	app.get('/admin/follow', middleware.admin.buildHeader, renderAdmin);
	app.get('/api/admin/follow', renderAdmin);

	callback();
};

plugin.addAdminNavigation = function(header, callback) {
	header.plugins.push({
		route: '/follow',
		icon: 'fa-tint',
		name: 'Custom Follow'
	});

	callback(null, header);
};

plugin.getCategories = function(params, callback) {
	categories = params;
	console.log(categories);
    callback(null, params);
};

function renderAdmin(req, res, next) {
	res.render('admin/follow', {fields:fields});
}

module.exports = plugin;