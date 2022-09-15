import "./styles/tailwind.css";

function App() {
    return (
        <article className="center [--center-width:45ch] stack">
            <h1>Testing Tailwind Configurations</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                perspiciatis ipsum numquam eos vel rerum unde repudiandae eius
                voluptate sapiente, natus repellendus quis. Itaque, blanditiis
                provident! Minus at sint dicta eaque, voluptates praesentium
                libero quae beatae. Sapiente voluptatibus saepe delectus
                voluptates laborum? Pariatur possimus necessitatibus similique
                excepturi quidem laborum est.
            </p>
            <div className="p-xl bg-[color:var(--primary)]">
                <p className="text-5 font-bold  leading-0 uppercase">
                    Testing this configs out
                </p>
            </div>
            <pre className="">
                <code>
                    {`
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
                    `}
                </code>
            </pre>
        </article>
    );
}

export default App;
