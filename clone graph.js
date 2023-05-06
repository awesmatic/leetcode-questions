if (!node) {
    return null;
}

// create a map to store visited nodes and their clones
const visited = new Map();

// add the starting node to the map
visited.set(node, new Node(node.val));

// create a queue to hold nodes to be visited
const queue = [node];

// loop through the queue until all nodes are visited
while (queue.length) {
    // get the next node to visit
    const currNode = queue.shift();

    // loop through the neighbors of the current node
    for (let neighbor of currNode.neighbors) {
        if (!visited.has(neighbor)) {
            // if the neighbor hasn't been visited yet, create a clone of it
            visited.set(neighbor, new Node(neighbor.val));

            // add the neighbor to the queue to be visited later
            queue.push(neighbor);
        }

        // add the neighbor clone to the current node clone's neighbors
        visited.get(currNode).neighbors.push(visited.get(neighbor));
    }
}

// return the clone of the starting node
return visited.get(node);