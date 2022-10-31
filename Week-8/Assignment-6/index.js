"use strict";
class Graph {
  constructor(edges) {
    this.vertex = edges.length;
    this.edges = new Array(this.vertex);

    for (let i = 0; i < this.vertex; i++) {
      this.edges[i] = edges[i];
    }
  }

  printAllPaths(source, destination) {
    let isVisited = new Array(this.vertex);
    for (let i = 0; i < this.vertex; i++) {
      isVisited[i] = false;
    }
    let pathList = [];

    pathList.push(source);

    // Find and Print Path
    this.printAllPathsHelper(source, destination, isVisited, pathList);
  }

  printAllPathsHelper(currentVertex, destination, isVisited, localPathList) {
    if (currentVertex == destination) {
      console.log(localPathList);
    }

    // Visited current node
    isVisited[currentVertex] = true;

    // Iterating for all the vertices
    for (let i = 0; i < this.edges[currentVertex].length; i++) {

      if (!isVisited[this.edges[currentVertex][i]]) {

        localPathList.push(this.edges[currentVertex][i]);
        this.printAllPathsHelper(
          this.edges[currentVertex][i],
          destination,
          isVisited,
          localPathList
        );

        localPathList.splice(
          localPathList.indexOf(this.edges[currentVertex][i]),
          1
        );
      }
    }

    // Hold the current node
    isVisited[currentVertex] = false;
  }
}

var edges = [[1, 2], [3], [3], []];
var source = 0;
var destination = 3;
const graph1 = new Graph(edges);
graph1.printAllPaths(source, destination);

edges = [[4, 3, 1], [3, 2, 4], [3], [4], []];
source = 0;
destination = 4;
const graph2 = new Graph(edges);
graph2.printAllPaths(source, destination);
