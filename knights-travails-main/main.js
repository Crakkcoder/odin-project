function compareArrays(a, b) {
  return (
    a.length === b.length && a.every((element, index) => element === b[index])
  );
}

class Vertex {
  constructor(value, predecessor = null) {
    this.value = value;
    this.predecessor = predecessor;
  }
}

class Graph {
  constructor() {
    this.nodes = new Map();
    this.lastAddedNodes = [];
  }
  addNode(value) {
    if (!this.nodes.has(value)) {
      this.nodes.set(value, new Set());
    }
  }
  addEdge(start, end) {
    if (this.nodes.has(start) && this.nodes.has(end)) {
      this.nodes.get(start).add(new Vertex(end, start));
      this.nodes.get(end).add(new Vertex(start, end));
    }
  }
  find(start, value) {
    let isFound = start === value;
    const q = [...this.nodes.get(start)];
    const visited = { [JSON.stringify(start)]: null };
    while (q.length > 0 && !isFound) {
      const curr = q.shift();

      if (JSON.stringify(curr.value) in visited) {
        continue;
      }
      visited[JSON.stringify(curr.value)] = curr.predecessor;

      if (compareArrays(curr.value, value)) {
        isFound = true;
      }

      this.nodes.get(curr.value).forEach((edge) => {
        if (JSON.stringify(edge.value) in visited) {
          return;
        }
        q.push(edge);
      });
    }

    return isFound ? this._getPath(visited, value) : null;
  }
  showConnections = () => {
    console.log(this.nodes);
  };
  _getPath(path, target) {
    const pathArray = [target];
    while (path[JSON.stringify(target)] !== null) {
      pathArray.push(path[JSON.stringify(target)]);
      target = path[JSON.stringify(target)];
    }
    return this._printPath(pathArray);
  }
  _printPath(path) {
    console.log(`You made it in ${path.length} moves! Here's your path:`);
    path.reverse().forEach((step) => console.log(step));
    return true;
  }
}

function getAllMovesFromPosition(pos) {
  const [x, y] = pos;

  const topRightMove = [x + 1, y + 2];
  const topLeftMove = [x - 1, y + 2];

  const bottomLeftMove = [x + 1, y - 2];
  const bottomRightMove = [x - 1, y - 2];

  const leftTopMove = [x - 2, y + 1];
  const leftBottomMove = [x - 2, y - 1];

  const rightTopMove = [x + 2, y + 1];
  const rightBottomMove = [x + 2, y - 1];

  return [
    topRightMove,
    topLeftMove,
    bottomLeftMove,
    bottomRightMove,
    leftTopMove,
    leftBottomMove,
    rightTopMove,
    rightBottomMove,
  ].filter(([x, y]) => x >= 0 && x <= 7 && y >= 0 && y <= 7);
}

const knightMoves = (start, end) => {
  const graph = new Graph();
  graph.addNode(start);

  const q = [start];
  const addedNodes = {};
  let pathFromStartToEnd = graph.find(start, end);
  while (q.length > 0 && !pathFromStartToEnd) {
    const curr = q.shift();
    if (JSON.stringify(curr) in addedNodes) {
      continue;
    }
    addedNodes[JSON.stringify(curr)] = true;

    const possibleMovesFromCurrPos = getAllMovesFromPosition(curr);
    possibleMovesFromCurrPos.forEach((move) => {
      if (JSON.stringify(move) in addedNodes) {
        return;
      }
      q.push(move);
      graph.addNode(move);
      graph.addEdge(curr, move);
    });

    pathFromStartToEnd = graph.find(start, end);
  }
};
knightMoves([1, 1], [7, 7]);
