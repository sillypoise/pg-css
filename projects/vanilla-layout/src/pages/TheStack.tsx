export default function TheStack() {
    return (
        <div className="center">
            <div className="stack">
                <h2>The Stack</h2>
                <div className="stack bs-80 box bg-teal | debug">
                    <div className="box">We stack!</div>
                    <div className="box">
                        <p>All of us get a top margin space</p>
                    </div>
                    <div className="box">
                        <p>Except the first child</p>
                    </div>
                    <div className="box stack bg-red">
                        <p>
                            You can split me anywhere you like by targeting a
                            child with the
                        </p>
                        <div className="box">
                            <code>{`.stack > :nth-child(2) { margin-block-end: auto; }`}</code>
                        </div>
                        <p>&nbsp;class for a specific target child!</p>
                        <p>
                            <em>As long as</em> the stack element is the only
                            child of the parent element. Else you have to{" "}
                            <em>explicitly</em> add an arbitrary{" "}
                            <code>{`block-size: {arbitrary value}`}</code>{" "}
                            property! E.g. <code>block-size: 80rem</code>
                        </p>
                        <p>
                            Remove the <code>{`bs-{value}`}</code> class to see
                            what happens
                        </p>
                    </div>
                    <div className="box">Or even reset me</div>
                    <div className="box">Try it out!</div>
                </div>
            </div>
        </div>
    );
}
