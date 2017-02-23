'use strict';
/* globals $, app, socket */

define('admin/plugins/customfollow', ['settings'], function(Settings) {

	var ACP = {};

	ACP.init = function() {
		Settings.load('customfollow', $('.custom-follow-settings'));

		$('#save').on('click', function() {
			Settings.save('customfollow', $('.custom-follow-settings'), function() {
				app.alert({
					type: 'success',
					alert_id: 'customfollow-saved',
					title: 'Settings Saved',
					message: 'Please reload your NodeBB to apply these settings',
					clickfn: function() {
						socket.emit('admin.reload');
					}
				});
			});
		});
	};

	return ACP;
});