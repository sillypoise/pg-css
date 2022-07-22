export function TheGrid() {
    return (
        <article className="center">
            <div className="stack">
                <h1>The Grid</h1>
                <p>
                    Justs add the custom <code>{`auto-grid`}</code> class. Then
                    proceed to customize the cluster's children through
                    properties. Specifically:
                </p>
                <ul className="stack">
                    <li>
                        <p>
                            <strong>
                                <code>{`--grid-gap`}</code>
                            </strong>{" "}
                            → adjusts the gap of the actual{" "}
                            <strong>grid</strong> by changing the value of the{" "}
                            <code>{`gap: []rem;`}</code> property. Its{" "}
                            <strong>default value</strong> is{" "}
                            <code>{`var(--space-s)`}</code>
                        </p>
                        <ul>
                            <li>
                                <strong>Note</strong> you can also just change
                                the <code>{`gap: []`}</code> property with
                                inline styles. E.g.{" "}
                                <code>{`gap: --var(--space-m)`}</code>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            <strong>
                                <code>{`--grid-placement`}</code>
                            </strong>{" "}
                            →{" "}
                            <span style={{ color: "red" }}>
                                TODO: What does this actually do?
                            </span>{" "}
                            ... by changing the first value of the{" "}
                            <code>{`repeat: (<value>, <value>)`}</code>{" "}
                            property, which itself is the first value of the{" "}
                            <code>{`grid-template-columns`}</code> property. Its{" "}
                            <strong>default value</strong> is{" "}
                            <code>{`auto-fill`}</code>
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>
                                <code>{`--grid-min-width`}</code>
                            </strong>{" "}
                            → adjusts the{" "}
                            <strong>
                                minimum width of grid items, i.e. children
                            </strong>{" "}
                            inside the <strong>grid</strong> by changing the
                            first value of the
                            <code>{`minmax: <value>`}</code> property, which
                            itself is the first value of the{" "}
                            <code>{`grid-template-columns`}</code> property. Its{" "}
                            <strong>default value</strong> is{" "}
                            <code>{`16rem`}</code>.
                        </p>
                    </li>
                </ul>
                <p>Default values</p>
                <div className="auto-grid">
                    <div className="box bg-red">A</div>
                    <div className="box bg-teal">B</div>
                    <div className="box bg-red">C</div>
                    <div className="box bg-teal">D</div>
                    <div className="box bg-red">E</div>
                    <div className="box bg-teal">F</div>
                </div>
                <hr />
                <p>
                    Overwrite the minimum width of a grid child by overwriting
                    the
                    <code>--grid-item-min-width:</code> custom property value
                </p>
                <p>
                    Has a <code>{`--grid-gap: var(--space-2xs)`}</code> gap and
                    minimum item width of{" "}
                    <code>{`--grid-item-min-width: 30ch`}</code>
                </p>
                <div
                    className="auto-grid"
                    style={
                        {
                            "--grid-gap": "var(--space-2xs)",
                            "--grid-min-width": "30ch",
                        } as React.CSSProperties
                    }
                >
                    <div className="box bg-red">A</div>
                    <div className="box bg-teal">B</div>
                    <div className="box bg-red">C</div>
                    <div className="box bg-teal">D</div>
                    <div className="box bg-red">E</div>
                    <div className="box bg-teal">F</div>
                </div>
                <hr />
                <p>
                    Has a <code>{`--grid-gap: var(--space-2xs)`}</code> gap and
                    minimum item width of{" "}
                    <code>{`--grid-item-min-width: 10rem`}</code>
                </p>
                <div
                    className="auto-grid"
                    style={
                        {
                            "--grid-gap": "var(--space-2xs)",
                            "--grid-min-width": "10rem",
                        } as React.CSSProperties
                    }
                >
                    <div className="box bg-red">A</div>
                    <div className="box bg-teal">B</div>
                    <div className="box bg-red">C</div>
                    <div className="box bg-teal">D</div>
                    <div className="box bg-red">E</div>
                    <div className="box bg-teal">F</div>
                </div>
            </div>
        </article>
    );
}
