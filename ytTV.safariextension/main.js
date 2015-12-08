(function () {

	safari.application.addEventListener('command', function (e) {
		if (e.command === 'playyt') {
			var win = safari.application.activeBrowserWindow;
			var url = 'http://apple-tv.local/playyt=' + win.activeTab.url;
		//	alert(url);
			var xhr = new XMLHttpRequest();
              xhr.open('GET', url, true);                  
              xhr.send(null);
		
		}
	});

})();