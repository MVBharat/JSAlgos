# Algos

Algorithm and tricky programs practice 

**Tree**

A tree is a nonlinear data structure, compared to arrays, linked lists, stacks and queues which are linear data structures. A tree can be empty with no nodes or a tree is a structure consisting of one node called the root and zero or one or more subtrees.

![Tree structure]()


class Node {

    constructor(data){
        this.data = data;
        this.children = []
    }

    add(data){
        this.children.push(new Node(data))
    }

    remove(data){
        this.children = this.children.filter(node =>{
            return node.data !== data
        })
    }
}

class Tree {

    constructor(){
        this.root = null
    }
}

- BreadthFirstSearch Method (BFS) 

- DepthFirstSearch Method (DFS)

**BreadthFirstSearch Method (BFS) :** Is width wise searching/collecting data - 

Collects the parent's **all childrens** (in the order of top to bottom of width wise level), if Child have any nodes then it collects all it's child nodes of that node.
if not then travel is end

*Example: [1,[2,[5,6],3,4,[7,8]]] BFS will be [1,2,3,4,5,6,7,8]

*Real time example - Orders of any orgnasation position - CEO, CTO, CPO, Engineers, other workers
- GPS Navigation systems: Navigation systems such as the Google Maps, which can give directions to reach from one place to another use BFS. They take your location to be the source node and your destination as the destination node on the graph. (A city can be represented as a graph by taking landmarks as nodes and the roads as the edges that connect the nodes in the graph.) BFS is applied and the shortest route is generated which is used to give directions or real time navigation.


**ALGORTITH;**


class Tree {
    constructor(){
        this.root = null
    }

    traverseBF(fn){
        const arr = [this.root];
        while(arr.length){
            const node = arr.shift()

            arr.push(...node.children)
            fn(node);
        }
    }    
}


**Depth First Search Method (DFS) :** Is Height wise searching/collecting data - 

It select the root(parent) then if root(parent) have node/nodes(children) then it travel to it's left side first node(child node). 

If that child node contains any sub children node/nodes then it collect that node. if that node again contain then again it travel to that node and collect it.

If not then it travel back to level up and find it's relative node and it's child node. and continue..

*Example : [1,[2,[5,6],3,4,[7,8]]]  DFS will be [1,2,5,6,3,4,,7,8]

Real time example :  For a weighted graph, DFS traversal of the graph produces the minimum spanning tree and all pair shortest path tree.




