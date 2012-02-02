function get_root(obj, current_ref) {
	if(obj.parent.location.href != current_ref) {
	return get_root(obj.parent, obj.location.href);
	}
	else {
	return obj.location.href;
}
}