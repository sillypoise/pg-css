import React from "react";

export function TheStack() {
    return (
        <div className="center">
            <div className="stack">
                <h1>The Stack</h1>
                <p>
                    We overwrite our stack top margin by defining the &nbsp;
                    <code>{`--stack-gap`}</code>&nbsp; custom property! We can
                    do this by defining an inline custom property. E.g.{" "}
                    <code>["--stack-gap": "var(--space-xs)"]</code>
                </p>
                <div
                    className="stack box bg-teal | debug"
                    style={
                        {
                            "--stack-gap": "var(--space-xs",
                            blockSize: "80rem",
                        } as React.CSSProperties
                    }
                >
                    <div className="box">We stack!</div>
                    <div className="box">
                        <p>All of us get a top margin space</p>
                    </div>
                    <div className="box">
                        <p>Except the first child</p>
                    </div>
                    <div
                        className="box stack bg-red"
                        style={{
                            marginBlockEnd: "auto",
                        }}
                    >
                        <p>I'm the fourth child!</p>
                        <p>
                            You can split the stack anywhere you like by
                            targeting a child with either a custom class
                        </p>
                        <div className="box bg-gray">
                            <code>{`.stack > :nth-child(4) { margin-block-end: auto; }`}</code>
                        </div>
                        <p>&nbsp;or with an inline style!</p>
                        <div className="box bg-gray">
                            <code>{`style={{
                            marginBlockEnd: "auto",
                        }}`}</code>
                        </div>

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
                <p>
                    We can also make our stack recursive by changing the
                    selectors in our class
                    <code>{`.stack * + *: `}</code>
                </p>
            </div>
        </div>
    );
}
