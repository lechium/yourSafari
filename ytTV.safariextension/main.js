
(function () {

	safari.application.addEventListener('command', function (e) {
		if (e.command === 'playyt') {
			var win = safari.application.activeBrowserWindow;
			var hn = safari.extension.settings.hostname;
			var url = 'http://' + hn + '/playyt=' + win.activeTab.url;
			
			var xhr = new XMLHttpRequest();
              xhr.open('GET', url, true);                  
              xhr.send(null);
		
		}
	});

})();