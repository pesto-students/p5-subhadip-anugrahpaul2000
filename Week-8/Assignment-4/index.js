"use strict";
class Graph {
  constructor(vertex, edges) {
    this.vertex = vertex;
    this.edges = new Array(vertex);

    for (let i = 0; i < this.vertex; i++) {
      this.edges[i] = [];
    }

    while (edges.length) {
      this.addPath(edges.shift());
    }
  }

  addPath(edge) {
    this.edges[edge[0]].push(edge[1]);
  }

  checkPathExist(source, destination) {
    let temp;

    let visited = new Array(this.vertex);
    for (let i = 0; i < this.vertex; i++) {
      visited[i] = false;
    }

    let queue = [];

    visited[source] = true;
    queue.push(source);

    while (queue.length != 0) {
      let currentVertex = queue.shift();

      if (currentVertex == destination) {
        return true;
      }

      for (let i = 0; i < this.edges[currentVertex].length; i++) {
        if (visited[this.edges[currentVertex][i]] === false) {
          queue.push(this.edges[currentVertex][i]);
          visited[this.edges[currentVertex][i]] = true;
        }
      }
    }

    return false;
  }
}

var edges = [
  [0, 1],
  [1, 2],
  [2, 0],
];
var source = 0;
var destination = 2;
var vertex = 3;
const graph1 = new Graph(vertex, edges);
console.log(graph1.checkPathExist(source, destination));

edges = [
  [0, 1],
  [0, 2],
  [3, 5],
  [5, 4],
  [4, 3],
];
source = 0;
destination = 5;
vertex = 6;
const graph2 = new Graph(vertex, edges);
console.log(graph2.checkPathExist(source, destination));
