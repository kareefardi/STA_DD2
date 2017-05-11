//get_u(edge)            // get Edge start node
//getDelay(Node)		 // get Node delay
function getNodeName(node)
{
	return g.node(node);
}

function getDelay(node)
{
	Mapp[searchMap(node)][3]];
}

function find_index(arr, node)
{
	var i = -1;
	var arr_len = arr.len;
	for (var j = 0; i < arr.len; j++) {
		if (arr[j] == node) {
			i = j;
			break;
		}
	}
	return i;
}

function get_u(edges)
{
	var nodes = [];
	for (var i = 0; i < edges.length; i++)
		nodes[i] = edges[i]["v"];
	return nodes;

}
function CPM(graph)
{
	var nodes_sorted = garphlib.topsort(graph);
	var nodes_len = nodes_sorted.length;
	var acc_delays = [];
	var paths = [];

	paths[0] = getNodeName(nodes_sorted[0]);
	acc_delays[0] = 0;

	for (var i = 1; i < nodes_len - 1; i++) {
		var delay = 0;
		var path;

		var node = nodes_sorted[i];
		var in_edges = graph.inEdges(node);
		var in_edges_len = in_edges.length;

		var prev_nodes = get_u(in_edges);
		
		for (var i = 0; i < in_edges_len; i++) {
			var idx = find_index(nodes_sorted, prev_nodes[i]);
			if (acc_delays[i] > delay) {
				delay = acc_delays[idx];
				path = paths[idx];
			}
		}
		
		acc_delays[i] = delay + getDelay(nodes_sorted[i]);
		paths[i] += ' ' + getNodeName(node);
	}
	crit_path = paths[i].split(' ');
	return crit_path;
}
