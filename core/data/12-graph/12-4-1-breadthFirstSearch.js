function defaultString(item) {
    if (item === null) {
        return 'NULL'
    } else if (item === undefined) {
        return 'UNDEFINED'
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`
    }
    return item.toString()
}
class ValuePair {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
    toString() {
        return `[#${key}: ${this.value}]`
    }
}
class Dictionary {
    constructor(toStrFn = defaultString) {
        this.toStrFn = toStrFn
        this.table = {}
    }
    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key)
            this.table[tableKey] = new ValuePair(key, value)
            return true
        }
        return false
    }
    remove(key) {
        if (this.has(key)) {
            delete this.table[this.toStrFn(key)]
            return true
        }
        return false
    }
    has(key) {
        return this.table[this.toStrFn(key)] != null;
    }
    get(key) {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value
    }
    keyValues() {
        const valuePairs = []
        for (const k in this.table) {
            if (this.has(k)) {
                valuePairs.push(this.table[k])
            }
        }
        return valuePairs
    }
    keys() {
        return this.keyValues().map(valuePair => valuePair.key)
    }
    values() {
        return this.keyValues().map(valuePair => valuePair.value)
    }
    forEach(callbackFn) {
        const valuePairs = this.keyValues()
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
            if (result === false) {
                break
            }
        }
    }
    size() {
        return Object.keys(this.table).length
    }
    isEmpty() {
        return this.size() === 0
    }
    clear() {
        this.table = {}
    }
    toStrng() {
        if (this.isEmpty()) {
            return ''
        }
        const valuePairs = this.keyValues()
        let objString = `${valuePairs[0].toString()}`
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString}, ${valuePairs[i].toString()}`
        }
        return objString
    }
}

// 图
class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected
        this.vertices = []
        this.adjList = new Dictionary()
    }
    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v)
            this.adjList.set(v, [])
        }
    }
    addEdge(v, w) {
        if (!this.adjList.get(v)) {
            this.addVertex(v)
        }
        if (!this.adjList.get(w)) {
            this.addVertex(w)
        }
        this.adjList.get(v).push(w)
        if (!this.isDirected) {
            this.adjList.get(w).push(v)
        }
    }
    getVertices() {
        return this.vertices;
    }
    getAdjList() {
        return this.adjList;
    }
    toString() {
        let s = ''
        const vertices = this.getVertices()
        for (let i = 0; i < vertices.length; i++) {
            let neighbors = this.adjList.get(vertices[i])
            s += `${vertices[i]}->${neighbors.join(' ')}\n`
        }
        return s
    }
}

const graph = new Graph()
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i])
}
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')

console.log(graph.toString())

const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2
}
const initializeColor = vertices => {
    const color = {}
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE
    }
    return color
}


// breadth-first-search
class Queue {
    constructor() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    enQueue(element) {
        this.items[this.count] = element
        this.count++
    }
    deQueue() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }
    isEmpty() {
        return this.count - this.lowestCount === 0
    }
    size() {
        return this.count - this.lowestCount
    }
    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}

const breadthFirseSearch = (graph, startVertex, callback) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initializeColor(vertices)
    const queue = new Queue()
    queue.enQueue(startVertex)
    while (!queue.isEmpty()) {
        const u = queue.deQueue()
        const neighbors = adjList.get(u)
        color[u] = Colors.GREY
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i]
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY
                queue.enQueue(w)
            }
        }
        color[u] = Colors.BLACK
        if (callback) {
            callback(u)
        }
    }
}

const printValue = u => console.log(`Visited vertex: ${u}`)
breadthFirseSearch(graph, myVertices[4], printValue)

// 应用 BFS寻找最短路线
const BFS = (graph, startVertex) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initializeColor(vertices)
    const queue = new Queue()
    queue.enQueue(startVertex)
    const distances = {}
    const predecessors = {}
    for (let i = 0; i < vertices.length; i++) {
        distances[vertices[i]] = 0
    }
    while (!queue.isEmpty()) {
        const u = queue.deQueue()
        const neighbors = adjList.get(u)
        color[u] = Colors.GREY
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i]
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY
                distances[w] = distances[u] + 1
                predecessors[w] = u
                queue.enQueue(w)
            }
        }
        color[u] = Colors.BLACK
    }
    return {
        distances,
        predecessors
    }
}
const shortestPath = BFS(graph, myVertices[0])
console.log(shortestPath)

// 打印路径
class Stack {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        return this.items.pop()
    }
    isEmpty() {
        return this.items.length
    }
}
const frontVertex = myVertices[0]
for (let i = 0; i < myVertices.length; i++) {
    let toVertex = myVertices[i]
    const path = new Stack()
    for (let v = toVertex; v !== frontVertex; v = shortestPath.predecessors[v]) {
        path.push(v)
    }

    path.push(frontVertex)
    let s = path.pop()
    while (!path.isEmpty()) {
        s += '- ' + path.pop()
    }
    console.log(s)
}