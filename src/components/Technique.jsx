const bronzes = [
    {
        name: "brute force",
        problems: [
            {
                problemName: "",
                source: "",
                diff: "",
                statement: "",
                code: ""
            },
            {}
        ]
    },
    {

    },
    {
        name: "graph implementations",
        problems: [
            {
                problemName: "Network Topology",
                source: "Codeforces",
                diff: "1200",
                statement: `
                    Polycarpus continues working as a system administrator in a large corporation. The computer network of this corporation consists of n computers, some of them are connected by a cable. The computers are indexed by integers from 1 to n. It's known that any two computers connected by cable directly or through other computers

                    Polycarpus decided to find out the network's topology. A network topology is the way of describing the network configuration, the scheme that shows the location and the connections of network devices.

                    Polycarpus knows three main network topologies: bus, ring and star. A bus is the topology that represents a shared cable with all computers connected with it. In the ring topology the cable connects each computer only with two other ones. A star is the topology where all computers of a network are connected to the single central node.

                    Let's represent each of these network topologies as a connected non-directed graph. A bus is a connected graph that is the only path, that is, the graph where all nodes are connected with two other ones except for some two nodes that are the beginning and the end of the path. A ring is a connected graph, where all nodes are connected with two other ones. A star is a connected graph, where a single central node is singled out and connected with all other nodes. For clarifications, see the picture.

                    You've got a connected non-directed graph that characterizes the computer network in Polycarpus' corporation. Help him find out, which topology type the given network is. If that is impossible to do, say that the network's topology is unknown.
                `,
                code: `
                    #include <bits/stdc++.h>
                    using namespace std;
                    int main() {
                        int n,m; cin>>n>>m;
                        vector<vector<int>> v(n, vector<int>(0));
                        for(int i=0; i<m; i++) {
                            int a,b; cin>>a>>b; a--, b--;
                            v[a].push_back(b); v[b].push_back(a);
                        }
                        // uno: number of vertex with degree = 1
                        // dos: number of vertex with degree = 2
                        // k: number of vertex with degree more than 2
                        int uno = 0, dos = 0, k = 0;
                        for(auto x:v) {
                            if(x.size() == 1) uno++;
                            else if(x.size() == 2) dos++;
                            else k++;
                        }
                        if(uno + dos + k == n) {
                            if(uno == 2 && dos == n - 2) cout << "bus topology";
                            else if(dos == n) cout << "ring topology";
                            else if(uno == n-1 && k == 1) cout << "star topology";
                            else cout << "unknown topology";
                        }
                        else cout << "unknown topology";
                    }
                `
            },
            {}
        ]
    },
]

const silvers = [
    {
        name: "prefix sums",
        problems: [
            {
                problemName: "",
                source: "",
                diff: "",
                statement: "",
                code: ""
            }
        ]
    },
    {
        name: "binary search",
        problems: [
            {
                problemName: "Coins and Triangle",
                source: "CodeChef",
                diff: "",
                statement: `
                    Chef belongs to a very rich family which owns many gold mines. Today, he brought N gold coins and decided to form a triangle using these coins. Isn't it strange?

                    Chef has a unusual way of forming a triangle using gold coins, which is described as follows:

                    He puts 1 coin in the 1st row.
                    then puts 2 coins in the 2nd row.
                    then puts 3 coins in the 3rd row.
                    and so on as shown in the given figure.

                    Chef is interested in forming a triangle with maximum possible height using at most N coins. Can you tell him the maximum possible height of the triangle?
                `,
                code: `
                    #include <bits/stdc++.h>
                    using namespace std;
                    typedef long long ll;
                    const ll N = 1e5 -1;
                    ll tri(ll n) {
                        return n*(n+1)/2;
                    }
                    void sol() {
                        ll n; cin>>n;
                        ll hi = N, lo = 0;
                        ll ans = 0;
                        while(lo <= hi) {
                            ll x = (lo + hi)/2;
                            if(n < tri(x)) hi = x - 1;
                            else if(n > tri(x)) { 
                                lo =  x + 1; 
                                ans = max(ans, x);
                            }
                            else {
                                ans = x; break;
                            }
                        }
                        cout << ans << endl;
                    }
                    int main() {
                        int t; cin>>t;
                        while(t--) sol();
                    }
                `
            },
            {}
        ]
    },
    {
        name: "depth-first search",
        problems: [
            {
                problemName: "Building Roads",
                source: "CSES Problem Set",
                statement: `Byteland has n cities, and m roads between them. The goal is to construct new roads so that there is a route between any two cities. Your task is to find out the minimum number of roads required, and also determine which roads should be built.`,
                code: `
                    #include <bits/stdc++.h>
                    using namespace std;
                    vector<int> G[100001];
                    bool vis[100001];
                    void dfs(int u) {
                        vis[u] = true;
                        for(auto v:G[u]) {
                            if(vis[v]) continue;
                            dfs(v);
                        }
                    }
                    int main() {
                        int n,m; cin>>n>>m;
                        for(int i=0; i<m; i++) {
                            int a,b; cin>>a>>b;
                            G[a].push_back(b); G[b].push_back(a);
                        }
                        vector<int> road;
                        for(int i=1; i<=n; i++) {
                            if(!vis[i]) { 
                                road.push_back(i);
                                dfs(i); 
                            }
                        }
                        cout << road.size() - 1 << endl;
                        for(int i=0; i<road.size()-1; i++) 
                            cout << road[i] << " " << road[i+1] << endl;
                    }
                `
            },
            {
                problemName: "Cyclic Components",
                source: "Codeforces",
                diff: "1500",
                statement: `
                    You are given an undirected graph consisting of n vertices and m edges. Your task is to find the number of connected components which are cycles.

                    
                    Here are some definitions of graph theory.

                    An undirected graph consists of two sets: set of nodes (called vertices) and set of edges. Each edge connects a pair of vertices. All edges are bidirectional (i.e. if a vertex a is connected with a vertex b, a vertex b is also connected with a vertex a). An edge can't connect vertex with itself, there is at most one edge between a pair of vertices.

                    Two vertices u and v belong to the same connected component if and only if there is at least one path along edges connecting u and v.

                    A connected component is a cycle if and only if its vertices can be reordered in such a way that:

                        the first vertex is connected with the second vertex by an edge,
                        the second vertex is connected with the third vertex by an edge,
                        ...
                        the last vertex is connected with the first vertex by an edge, all the described edges of a cycle are distinct.
                    
                    A cycle doesn't contain any other edges except described above. By definition any cycle contains three or more vertices.
                `,
                code: `
                    #include <bits/stdc++.h>
                    using namespace std;
                    vector<int> v[200001];
                    bool vis[200001];
                    void dfs(int x, int &s, int &p) {
                        vis[x] = true;
                        for(auto u:v[x]) {
                            if(vis[u]) continue; 
                            s++;
                            if(v[u].size() == 2) p++;
                            dfs(u, s, p);
                        }
                    }
                    int main() {
                        int n,m; cin>>n>>m;
                        for(int i=0; i<m; i++) {
                            int a,b; cin>>a>>b;
                            v[a].push_back(b); v[b].push_back(a);
                        }
                        int ans = 0;
                        for(int i=1; i<=n; i++) {
                            if(!vis[i]) {
                                int p=0; if(v[i].size() == 2) p =1; int s=1;
                                dfs(i, s, p);
                                if(s == p) ans++;
                            }
                        }
                        cout << ans; 
                    }
                `
            }
        ]
    }
]

const golds = [
    {
        name: "divisibility",
        problems: [
            {
                problemName: "",
                source: "",
                diff: "",
                statement: ``,
                code: ``
            },
            {
                problemName: "",
                source: "",
                diff: "",
                statement: ``,
                code: ``
            }
        ]
    },
    {
        name: "modular arithmetic",
        problems: [
            {
                problemName: "",
                source: "",
                diff: "",
                statement: ``,
                code: ``
            },
            {
                problemName: "",
                source: "",
                diff: "",
                statement: ``,
                code: ``
            }
        ]
    },
    {}
]


export { bronzes };
export { silvers };
export { golds };

export default function ShowTechnique({ technique }) {
    if (!technique) return null;
    return (
        <>
            <h1>{technique.name}</h1>
            {
                technique.problems.map((problem, i) => (
                    <div>
                        <h2 className="font-bold">{problem.problemName}</h2>
                        <span className="flex flex-row gap-2">
                            <span className="">{problem.source}</span>
                            <span>·</span>
                            <span>{problem.diff}</span>
                        </span>
                        <div className="flex flex-row">
                            <p className="w-2/5">{problem.statement}</p>
                            <pre>
                                <code className="w-3/5">{problem.code}</code>
                            </pre>
                        </div>
                    </div>
                )
                )
            }
        </>
    )
}