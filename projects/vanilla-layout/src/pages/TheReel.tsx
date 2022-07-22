import React from "react";

export function TheReel() {
    return (
        <div className="stack">
            <h1>The Reel</h1>
            <p>
                The Reel is a robust and efficient antidote to carousel/slider
                components.It is ideal for browsing categories of things:
                movies; products; news stories; photographs.
            </p>
            <p>
                We can adjust the min width of a reel item with the &nbsp;
                <code>{`--reel-item-width`}</code> &nbsp; custom property, whose{" "}
                <strong>default value</strong> is{" "}
                <code>{`var(--space-5xl)`}</code>.
            </p>
            <p>
                We can adjust the spacing between the children of the reel in
                two ways:
            </p>
            <ul>
                <li>
                    <p>
                        Adjusting the <code>{`--reel-gap`}</code> custom
                        property. Which effectively just changes the value of
                        the <code>{`gap`}</code> property. Its{" "}
                        <strong>default value</strong> is{" "}
                        <code>{`var(--space-s)`}</code>
                    </p>
                </li>
                <li>
                    <p>
                        Adjusting the <code>{`--reel-item-margin`}</code> custom
                        property which effectively overwrites the{" "}
                        <code>{`margin`}</code> value of all children in the
                        reel. Its <strong>default value</strong> is{" "}
                        <code>{`var(--space-s)`}</code>
                    </p>
                </li>
                <li>
                    <p>
                        Additionally we can also adjust the spacing between the
                        border of our reel container and its last child by
                        changing the <code>{`--reel-after-margin`}</code> custom
                        property. Its <strong>default value</strong> is{" "}
                        <code>{`var(--space-3xs)`}</code> That property
                        effectively overwrites the <code>{`flex-basis`}</code>{" "}
                        property of a pseudo <code>{`:after`}</code> element.
                    </p>
                </li>
            </ul>
            <p>
                Last but not least, for accessibility reasons it is important
                the The Reel container has a visual border which marks the
                actual container. To adujst the border we can use the{" "}
                <code>{`--reel-border`}</code> property. Which itself overrides
                the <code>{`border-width`}</code> property of the reel
                container.
            </p>
            <div className="reel">
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    A
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    B
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    C
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    D
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    E
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    F
                </div>
            </div>
            <p>
                E.g. &nbsp;(
                <code>{`--reel-item-width: 40ch`}</code>)
            </p>
            <div
                className="reel"
                style={
                    {
                        "--reel-item-width": "40ch",
                    } as React.CSSProperties
                }
            >
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    A
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    B
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    C
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    D
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    E
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    F
                </div>
            </div>
            <p>
                E.g. &nbsp;(
                <code>{`--reel-gap: var(--space-2xl)`}</code>)
            </p>
            <div
                className="reel"
                style={
                    {
                        "--reel-gap": "var(--space-2xl)",
                    } as React.CSSProperties
                }
            >
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    A
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    B
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    C
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    D
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    E
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    F
                </div>
            </div>
            <p>
                E.g. &nbsp;(
                <code>{`--reel-item-margin: var(--space-l)`}</code>)
            </p>
            <div
                className="reel"
                style={
                    {
                        "--reel-item-margin": "var(--space-l)",
                    } as React.CSSProperties
                }
            >
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    A
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    B
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    C
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    D
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    E
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    F
                </div>
            </div>
            <p>
                E.g. &nbsp;(
                <code>{`--reel-border: 0`}</code>)
            </p>
            <div
                className="reel"
                style={
                    {
                        "--reel-border": "0",
                    } as React.CSSProperties
                }
            >
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    A
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    B
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    C
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    D
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    E
                </div>
                <div className="box" style={{ padding: "var(--space-3xl)" }}>
                    F
                </div>
            </div>
        </div>
    );
}
