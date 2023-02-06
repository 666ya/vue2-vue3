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

// depthFirstSearch

const depthFirstSearch = (graph, callback) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const colors = initializeColor(vertices)
    const depthFirstSearchVisit = (u, colors, adjList, callback) => {
        colors[u] = Colors.GREY
        if (callback) {
            callback(u)
        }
        const neighbors = adjList.get(u)
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i]
            if (colors[w] === Colors.WHITE) {
                depthFirstSearchVisit(w, colors, adjList, callback)
            }
        }
        colors[u] = Colors.BLACK
    }
    for (let i = 0; i < myVertices.length; i++) {
        const u = myVertices[i]
        if (colors[u] === Colors.WHITE) {
            depthFirstSearchVisit(u, colors, adjList, callback)
        }
    }
}
// const printValue = u => console.log(`Visited vertex: ${u}`)
// depthFirstSearch(graph, printValue)


// 应用
const DFS = (graph) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const colors = initializeColor(vertices)
    const d = {}
    const f = {}
    const p = {}
    const time = {
        count: 0
    }
    for (let i = 0; i < myVertices.length; i++) {
        d[myVertices[i]] = 0
        f[myVertices[i]] = 0
        p[myVertices[i]] = null
    }
    for (let i = 0; i < myVertices.length; i++) {
        const u = myVertices[i]
        if (colors[u] === Colors.WHITE) {
            DFSVisit(u, colors, d, f, p, time, adjList)
        }
    }
    return {
        d,
        f,
        p
    }
}
const DFSVisit = (u, colors, d, f, p, time, adjList) => {
    colors[u] = Colors.GREY
    d[u] = ++time.count
    const neighbors = adjList.get(u)
    for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i]
        if (colors[w] === Colors.WHITE) {
            p[w] = u
            DFSVisit(w, colors, d, f, p, time, adjList)
        }
    }
    colors[u] = Colors.BLACK
    f[u] = ++time.count
}

const time = DFS(graph)
console.log(time)