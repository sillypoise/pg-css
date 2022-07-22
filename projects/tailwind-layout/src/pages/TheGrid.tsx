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
                            <code>{`theme(spacing.s)`}</code>
                        </p>
                        <ul>
                            <li>
                                <strong>Note</strong> you can also just change
                                the <code>{`gap-[]`}</code> utility class in
                                tailwind. E.g. <code>{`gap-m)`}</code>
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
                    <div className="box bg-red-400/80">A</div>
                    <div className="box bg-teal-500/60">B</div>
                    <div className="box bg-red-400/80">C</div>
                    <div className="box bg-teal-500/60">D</div>
                    <div className="box bg-red-400/80">E</div>
                    <div className="box bg-teal-500/60">F</div>
                </div>
                <hr />
                <p>
                    Overwrite the minimum width of a grid child by overwriting
                    the
                    <code>--grid-item-min-width:</code> custom property value
                </p>
                <p>
                    Has a <code>{`gap-2xs`}</code> gap and minimum item width of{" "}
                    <code>{`--grid-item-min-width: 30ch`}</code>
                </p>
                <div className="auto-grid gap-2xs [--grid-min-width:30ch]">
                    <div className="box bg-red-400/80">A</div>
                    <div className="box bg-teal-500/60">B</div>
                    <div className="box bg-red-400/80">C</div>
                    <div className="box bg-teal-500/60">D</div>
                    <div className="box bg-red-400/80">E</div>
                    <div className="box bg-teal-500/60">F</div>
                </div>
                <hr />
                <p>
                    Has a <code>{`gap-2xs)`}</code> gap and minimum item width
                    of <code>{`--grid-item-min-width: 10rem`}</code>
                </p>
                <div className="auto-grid gap-2xs [--grid-min-width:10rem]">
                    <div className="box bg-red-400/80">A</div>
                    <div className="box bg-teal-500/60">B</div>
                    <div className="box bg-red-400/80">C</div>
                    <div className="box bg-teal-500/60">D</div>
                    <div className="box bg-red-400/80">E</div>
                    <div className="box bg-teal-500/60">F</div>
                </div>
            </div>
        </article>
    );
}
