# Algos

Algorithm and tricky programs 

# DataStrucure

Ways of organizing information with optimal ‘runtime complexity’ for adding or removing records.


   ###### Different type of Data Structures

- Queue
- Stack
- LinkedList
- Tree

**Queue** -  also called as **FIFO(First In First Out)**

The Process of enqueuing data at rear and dequeuing data from the front this way of accessing data structure is known as Queue.

In other words The Process of adding data from one side(left end) and remove data from the other side(right end).



In Queue data is always added at one end and remove at another end

   ###### Javascript Methods to handle Queue
   
- Adding Queue in Javascript   -->  array.unshift()

- Removing Queue in Javascript -->   array.pop()

class Queue {

    constructor(){
        this.data = []
    }

    add(record){
        this.data.unshift(record)
    }
    remove(){
        return this.data.pop()
    }
}
   
   ####  Circular Queue 
   
   The queue starts at one end and ending or the last point is connected back to the initial point to make it circle
    
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

Collects the parent's **all childrens** (in the order of top to bottom of width wise level), if Child has any nodes then it collects all it's child nodes. If again those children has sub node/child then it traverse there and continue left side to right side of the child 

if not then travel is end


*Example: [1,[2,[5,6],3,4,[7,8]]] BFS will be [1,2,3,4,5,6,7,8]

*Real time example - Orders of any orgnisation position - CEO, CTO, CPO, Engineers, other workers
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

First It selects the root(parent) then if root(parent) has any sub node/nodes(childrens) then it travels to it's left side first node(child node). 

If that child node contains any sub children node/nodes then it collects that node and check its sub node if that node is contained then again it travels to that down node and collects it. If not then points back to parent relative child node and continues


*Example : [1,[2,[5,6],3,4,[7,8]]]  DFS will be [1,2,5,6,3,4,,7,8]

Real time example :  For a weighted graph, DFS traversal of the graph produces the minimum spanning tree and all pair shortest path tree.




