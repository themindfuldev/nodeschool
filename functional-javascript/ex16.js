 function getDependencies(tree) {
    var result = [];

    if (tree.dependencies) {
      	var dependencies = Object.keys(tree.dependencies);
      	dependencies.forEach(function(name) {
      		var dependency = tree.dependencies[name];
      		result.push(name + '@' + dependency.version);

      		if (dependency.dependencies) {
      			result = result.concat(getDependencies(dependency));
      		}
      	});
	}

	result = result.filter(function(elem, pos) {
    	return result.indexOf(elem) == pos;
	})
    return result.sort();
}

module.exports = getDependencies;