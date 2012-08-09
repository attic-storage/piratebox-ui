function fnGetDomain(url) {
	return url.match(/:\/\/(.[^/]+)/)[1];
}