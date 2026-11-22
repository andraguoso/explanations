const bronzes = [
    {
        name: "brute force",
        concept: "solving by brute force or complete search is usually the baseline approach to attacking any problem, and is quite helpful to further develop more complex ideas.",
        problems: [
            {
                problemName: "IQ Test",
                source: "Codeforces",
                diff: "1100",
                statement: `
                    In the city of Ultima Thule job applicants are often offered an IQ test.
                    The test is as follows: the person gets a piece of squared paper with a 4x4 square painted on it. Some of the square's cells are painted black and others are painted white. Your task is to repaint at most one cell the other color so that the picture has a 2x2 square, completely consisting of cells of the same color. If the initial picture already has such a square, the person should just say so and the test will be completed.
                    Your task is to write a program that determines whether it is possible to pass the test. You cannot pass the test if either repainting any cell or no action doesn't result in a 2x2 square, consisting of cells of the same color.
                
                `,
                code: `
                    #include <bits/stdc++.h>
                    using namespace std;
                    char grid[5][5];
                    bool ok(int i, int j) {
                        vector<pair<int, int>> s = {{0, 0}, {0, 1}, {1, 0}, {1, 1}};
                        int sh = 0, ps =0;
                        for(int k=0; k<4; k++) {
                            if((k==1 ||k == 3) && j==4) continue;
                            if((k==2 || k == 3) && i==4) continue;

                            if(grid[i+s[k].first][j+s[k].second] == '#') sh++;
                            else ps++;
                        }
                        return sh >= 3 || ps >= 3;
                    }
                    
                    int main() {
	                    for(int i=1; i<=4; i++) {
                            for(int j=1; j<=4; j++) {
                                cin>>grid[i][j];
                            }
                        }

                        for(int i=1; i<=4; i++) {
                            for(int j=1; j<=4; j++) {
                                if(ok(i, j)) {
                                    cout << "YES"; return 0;
                                }
                            }
                        }
                        cout << "NO";
                    }

                `
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
            {
                problemName: "Graph",
                source: "Aizu Online Judge",
                diff: "",
                statement: `
                    There are two standard ways to represent a graph G = (V, E), where V is a set of vertices and E is a set of edges: adjacency list representation and adjacency matrix representation.

                    An adjacency-list representation consists of an array Adj[|V|] of |V| lists, one for each vertex in V. For each u ∈ V, the adjacency list Adj[u] contains all vertices v such that there is an edge (u, v) ∈ E. That is, 
                    Adj[u] consists of all vertices adjacent to u in G.

                    An adjacency-matrix representation consists of |V|x|V| matrix A = a[i][j] such that a[i][j] = 1 if (i, j) ∈ E, a[i][j] = 0 otherwise.

                    Write a program which reads a directed graph G represented by the adjacency list, and prints its adjacency-matrix representation. 
                    G consists of n(n =|V|) vertices identified by their IDs 1,2,..,n respectively.
                `,
                code: `
#include <bits/stdc++.h>
using namespace std;
int main() {
    int n; cin>>n;
    int v[n][n];
    for(int i=0; i<n; i++) {
        for(int j=0; j<n; j++) {
            v[i][j] = 0;
        }
    }

    for(int i=1; i<=n; i++) {
        int a,b; cin>>a>>b;
        a--;
        for(int j=0; j<b; j++) {
            int u; cin>>u; u--; v[a][u] = 1;
        }
    }

    for(int i=0; i<n; i++) {
        for(int j=0; j<n; j++) {
            if(j!=n-1) cout << v[i][j] << " ";
            else cout << v[i][j] << endl;
        }
    }
}
                `
            }
        ]
    },
]

const silvers = [
    {
        name: "prefix sums",
        concept: "in an array, sometimes you will be asked to keep sums or compare sums of subarrays or subsequent elements. to save yourself the O(n) operations, you can keep an additional array p[N], where p[i] = sum of elements of array a from 0 to i, 0-indexed. \ncorresponding formula: p[i] = p[i-1] + a[i]",
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
        concept: "",
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
            {
                problemName: "Funky Numbers",
                source: "Codeforces",
                diff: "1300",
                statement: `
                    As you very well know, this year's funkiest numbers are so called triangular numbers (that is, integers that are representable as , where k is some positive integer), and the coolest numbers are those that are representable as a sum of two triangular numbers.

                    A well-known hipster Andrew adores everything funky and cool but unfortunately, he isn't good at maths. Given number n, help him define whether this number can be represented by a sum of two triangular numbers (not necessarily different)!
                `,
                code: `
                    #include <bits/stdc++.h>
                    using namespace std;
                    typedef long long ll;
                    const ll N = 1e5;
                    ll f(ll x) {
                        return x*(x+1)/2;
                    }

                    int main() {
                        ios::sync_with_stdio(false);
                        cin.tie(nullptr);
                        ll n; cin>>n;
                        for(ll i=1; i<=N; i++) {
                            ll l=1, r=i;
                            while(l<=r) {
                                ll x = (l+r)>>1;
                                if(f(x) + f(i) == n) {
                                    cout << "YES"; return;
                                }    
                                else if(f(x) + f(i) < n) l = x + 1;
                                else r = x - 1;
                            }
                        }
                        cout << "NO";
                        return 0;
                    }

                `
            }
        ]
    },
    {
        name: "depth-first search",
        concept: "",
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
        concept: "divisibility refers to the property of a number being able to be divided by others or by a specific other. for example, we can say that 6 is divisible by 3, as 6/3 = 2, which is an integer number. also, 6%3 = 0, as in, 0 = 6 mod 3. ",
        problems: [
            {
                problemName: "Counting Divisors",
                source: "CSES Problem Set",
                diff: "",
                statement: ``,
                code: `
                    #include <bits/stdc++.h>
                    using namespace std;
                    void sol() {
                        int n; cin>>n;
                        int ans=0;
                        for(int x=1; x*x<=n; x++) {
                            if(n%x) continue;
                            ans++; if(x != n/x) ans++;
                        }
                        cout << ans << endl;
                    }

                    int main() {
                        int t; cin>>t;
                        while(t--) sol();
                    }
                `
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
        concept: "you probably are familiar with the following symbol and its use in programming: it refers to the reside of an inexact division, called the module. modular arithmetic is a section of arithmetic that expands on this element, which comes to be quite useful in problems that require last digits of really large numbers [numbers to the power of other really large numbers]",
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
    }
]


export { bronzes };
export { silvers };
export { golds };
import { useState } from "react";


export default function ShowTechnique({ technique }) {
    const [selectedP, setSelectedP] = useState(null);
    const [show, setShow] = useState("statement");

    if (!technique) return null;

    return (
        <section className="flex flex-col gap-4 w-[100vh]">
            <span className="font-bold">{technique.name}</span>

            <section>
                <span>brief concept</span>
                <p>{technique.concept}</p>
            </section>

            <section className="flex flex-col gap-2">
                <span>problem set</span>
                <section className="flex flex-row gap-3">
                    <div className="flex flex-col items-start w-1/3 gap-1">
                        {
                            technique.problems.map((problem, i) => (
                                <button key={i}
                                    onClick={() => {
                                        setSelectedP(problem);
                                        setShow("statement");
                                    }}
                                    className="bg-gray-200 rounded-md p-2 w-[25vh]"
                                >
                                    <span className="flex flex-col items-start">
                                        <span>{problem.problemName}</span>
                                        <span className="flex flex-row gap-2 text-[1.9vh] text-gray-500">
                                            <span>{problem.source}</span>
                                            <span>·</span>
                                            <span>{problem.diff}</span>
                                        </span>
                                    </span>
                                </button>
                            ))
                        }
                    </div>
                    <div className="w-2/3">
                        {
                            <>
                                {selectedP ? (
                                    <>
                                        <span className="font-bold">{selectedP.problemName}</span>

                                        <div className="flex flex-row gap-5">
                                            <button onClick={() => setShow("statement")}>
                                                statement
                                            </button>
                                            <button onClick={() => setShow("code")}>
                                                code
                                            </button>
                                        </div>

                                        {
                                            show === "statement" ? (
                                                <p>
                                                    {selectedP.statement}
                                                </p>
                                            ) : (
                                                <pre>
                                                    <code>{selectedP.code}</code>
                                                </pre>
                                            )}
                                    </>
                                ) : (
                                    <p>pick whoever sounds best!</p>
                                )}
                            </>
                        }
                    </div>
                </section>
            </section>
        </section>
    )
}