/**
 * Created by kinglan525 on 15/12/29.
 */

function Graph(v) {
    this.vertices = v;
    this.vertexList= [];
    this.edges = 0;
    this.adj = [];
    for(var i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
    };
    this.marked = [];
    for(var i = 0; i < this.vertices; i++) {
        this.marked[i] = false;
    };
    this.edgeTo = [];
}

Graph.prototype = {
    constructor: Graph,
    addEdge: function(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    },
    showGraph: function() {
        for(var i = 0; i < this.vertices; i++) {
            var str = i + '->';
            for(var j = 0; j < this.vertices; j++) {
                if(this.adj[i][j] != undefined) {
                    str +=  this.adj[i][j] + ' ';
                    //console.log(i + '->' + this.adj[i][j]);
                }
            }
            console.log(str);
        }
    },
    //深度优先搜索
    dfs: function(v) {
        this.marked[v] = true;
        if(this.adj[v] != undefined) {
            console.log('Visited vertex: ' + v);
        }
        for(var w in this.adj[v]) {
            //书中有bug，修改如下
            if(!this.marked[this.adj[v][w]]) {
                this.dfs(this.adj[v][w]);
            }
        }
    },
    //广度优先搜索
    bfs: function(s) {
        var queue = [];
        this.marked[s] = true;
        queue.push(s);//添加到队尾
        while(queue.length > 0) {
            var v = queue.shift();//从队首删除
            if(v != undefined) {
                console.log('Visited vertex: ' + v);
            }
            for(var w in this.adj[v]) {
                if(!this.marked[this.adj[v][w]]) {
                    this.edgeTo[this.adj[v][w]] = v;
                    this.marked[this.adj[v][w]] = true;
                    queue.push(this.adj[v][w]);
                }
            }
        }
    },
    hasPathTo: function(v){
        return this.marked[v];
    },
    pathTo: function(v) {
        var source = 0;
        if(!this.hasPathTo(v)) {
            return undefined;
        }
        var path = [];
        for(var i = v; i != source; i = this.edgeTo[i]) {
            path.push(i);
        };
        path.push(source);
        return path;
    },
    topSort: function() {
        var stack = [];
        var visited = [];
        for(var i = 0; i < this.vertices; i++) {
            visited[i] = false;
        }
        for(var i = 0; i < this.vertices; i++) {
            if(visited[i] == false) {
                this.topSortHelper(i, visited, stack);
            }
        }
        for(var i = 0; i < stack.length; i++) {
            if(stack[i] != undefined && stack[i] != false) {
                console.log(this.vertexList[stack[i]]);
            }
        }
    },
    topSortHelper: function(v, visited, stack) {
        visited[v] = true;
        for(var w in this.adj[v]) {
            if(!visited[this.adj[v][w]]) {
                this.topSortHelper(visited[this.adj[v][w]], visited, stack);
            }
        }
        stack.push(v);
    },
    showGraphTex: function() {
        var visited = [];
        for(var i = 0; i < this.vertices; i++) {
            var str = this.vertexList[i] + '->';
            visited.push(this.vertexList[i]);
            for(var j = 0; j < this.vertices; j++) {
                if(this.adj[i][j] != undefined) {
                    if(visited.indexOf(this.vertexList[j]) < 0) {
                        str += this.vertexList[j] + ' ';
                    }

                }
            }
            console.log(str);
            visited.pop();
        }
    }
};

var g = new Graph(6);
console.log(g.adj);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(0, 1);
g.vertexList = ['S1', 'CS2', 'Data Structures',
    'Assembly Language', 'Operating Systems', 'Algorithms'];


g.showGraphTex();
g.topSort();

