const techniques = [
    {
        name: "brute force",
        problemName: "",
        problemStatement: "",
        problemCode: ""
    },
    {
        name: "binary search",
        problemName: "Coins and Triangle",
        problemStatement: "",
        problemCode: ""
    },
    {
        name: "depth-first search",
        problemName: "Building Roads",
        problemStatement: "",
        problemCode: ""
    }
]

export { techniques };


export default function ShowTechnique({ technique }) {
    return (
        <>
            <h1>{technique.name}</h1>
            <h2>{technique.problemName}</h2>
            <p>{technique.problemStatement}</p>
            <span>{technique.problemCode}</span>
        </>
    )
}