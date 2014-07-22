

(function () {
	function parseRepoName(url) {
		var matches = url.match(/github\.com\/[^/]+\/([^/]+)/);
		return matches[1] || null;
	}

	function parseRepoOrg(url) {
		var matches = url.match(/github\.com\/([^/]+)\//);
		return matches[1] || null;
	}

	var group = $('.repository-sidebar .sunken-menu-group').last();
	if (group.length > 0) {
		var org = parseRepoOrg(location.href);
		var repo = parseRepoName(location.href);

		var html = '<li class="tooltipped tooltipped-w" aria-label="Network">' +
			'<a href="/' + org + '/' + repo + '/network" aria-label="Network" class="sunken-menu-item js-disable-pjax">' +
          			'<span class="octicon octicon-git-branch"></span>' +
				'<span class="full-word">Network</span>' +
				'<img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16">' +
			'</a>' +
			'</li>';

		group.append($(html));
	}
})();


