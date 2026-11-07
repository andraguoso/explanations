const techniques = [
    {
        name: "brute force",
        problemName: "",
        problemStatement: "",
        problemCode: ""
    },
    {
        name: "binary search",
        problemName: "",
        problemStatement: "",
        problemCode: ""
    },
    {
        name: "depth-first search",
        problemName: "",
        problemStatement: "",
        problemCode: ""
    }
]

export default function ShowTechnique() {
    const [index, setIndex] = useState(0);
    let technique = techniques[index];
    return (
        <>
            <h1>{technique.name}</h1>
            <h2>{technique.problemName}</h2>
            <p>{technique.problemStatement}</p>
            <span>{technique.problemCode}</span>
        </>
    )
}