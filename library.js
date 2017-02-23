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

	plugin.reloadSettings();
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

plugin.reloadSettings = function(data) {
	if (!data || data.plugin === 'customfollow') {
		meta.settings.get('customfollow', function(err, settings) {
			plugin._settings = _.extend(plugin._settings || {}, settings);
			winston.verbose('[plugins/customfollow] Settings reloaded.');
		});
	}
};

module.exports = plugin;