export function TheStack() {
    return (
        <article className="center">
            <div className="stack">
                <h1>The Stack</h1>
                <p>
                    We overwrite our stack top margin by defining the &nbsp;
                    <code>{`--stack-gap`}</code>&nbsp; custom property! In
                    <strong>Tailwind</strong> we can do this with a simple
                    arbitrary property. E.g.
                    <code>[--stack-gap:theme(spacing.xs)]</code>
                </p>
                <div className="stack [--stack-gap:theme(spacing.xs)] bs-[80rem] box bg-teal-600/50 | debug">
                    <div className="box">We stack!</div>
                    <div className="box">
                        <p>All of us get a top margin space</p>
                    </div>
                    <div className="box">
                        <p>Except the first child</p>
                    </div>
                    <div className="box stack bg-red-500/60 mbe-auto">
                        <p>I'm the fourth child!</p>
                        <p>
                            You can split the stack anywhere you like by adding
                            the{" "}
                        </p>
                        <div className="box bg-gray-300 rounded-md">
                            <code>mbe-auto</code>
                        </div>
                        <p>&nbsp;utility class to a specific target child!</p>
                        <p>
                            <em>As long as</em> the stack element is the only
                            child of the parent element. Else you have to{" "}
                            <em>explicitly</em> add an arbitrary{" "}
                            <code>{`block-size: {arbitrary value}`}</code>{" "}
                            property! E.g. <code>bs-[80rem]</code>
                        </p>
                        <p>
                            Remove the <code>{`bs-{value}`}</code> class to see
                            what happens
                        </p>
                    </div>
                    <div className="box">Or even reset me</div>
                    <div className="box">Try it out!</div>
                </div>
                <p>
                    We can also make our stack recursive and <em>overwrite</em>{" "}
                    it's top margin by writing an arbitrry variant! Add &nbsp;
                    <code>{`[&_*+*]:mbs-l`}</code>&nbsp; class! E.g.{" "}
                    <code>[&_*+*]:mbs-l</code>
                </p>
                <div className="[&_*+*]:mbs-l bs-[80rem] box bg-teal-600/50 | debug">
                    <div className="box">
                        <p>We stack recursively!</p>
                    </div>
                    <div className="box">
                        <p>Even if we have nested elements!</p>
                        <div className="box">
                            <div className="box">
                                <p>
                                    That have <em>multiple children</em>
                                </p>
                            </div>
                            <div className="box">
                                <p>Themselves!</p>
                            </div>
                        </div>
                    </div>
                    <div className="box bg-red-500/60 mbe-auto">
                        <div className="box">
                            <p>
                                You can split me anywhere you like by adding the{" "}
                            </p>
                        </div>
                        <div className="box bg-gray-300 rounded-md">
                            <code>mbe-auto</code>
                        </div>
                        <div className="box">
                            <p>&nbsp;class to a specific target child!</p>
                        </div>
                    </div>
                    <div className="box">Try it out!</div>
                </div>
            </div>
        </article>
    );
}
