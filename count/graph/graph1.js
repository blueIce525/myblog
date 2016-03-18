/**
 * Created by kinglan525 on 15/12/29.
 */

function Graph(v) {
    this.vertices = v;
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
    }
};

var g = new Graph(5);
console.log(g.adj);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);

g.showGraph();

console.log('dfs:');
//g.dfs(0);


console.log('bfs:');
g.bfs(0);
var paths = g.pathTo(4);
var str = ''
while(paths.length > 0) {
    if(paths.length > 1) {
        str += paths.pop() + '-';
    } else {
        str += paths.pop();
    }
}
console.log(str);