export function TheCluster() {
    return (
        <div className="center">
            <div className="stack stack-gap:mbs-lg">
                <h1>The Cluster</h1>
                <p>
                    Justs add the custom <code>{`cluster`}</code> class. Then
                    proceed to customize the cluster's children through
                    properties. Specifically:
                </p>
                <ul className="stack">
                    <li>
                        <p>
                            <strong>
                                <code>{`--cluster-gap`}</code>
                            </strong>{" "}
                            → adjusts the gap of the actual{" "}
                            <strong>sidebar</strong> by changing the value of
                            the <code>{`gap: []rem;`}</code> property. Its{" "}
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
                                <code>{`--cluster-justify`}</code>
                            </strong>{" "}
                            → adjusts the{" "}
                            <strong>justification of the whole content</strong>{" "}
                            inside the cluster by changing the value of the{" "}
                            <code>{`justify-content: <value>;`}</code> property.
                            Its <strong>default value</strong> is{" "}
                            <code>{`start`}</code>
                        </p>
                        <ul>
                            <li>
                                <strong>Note</strong> you can also just change
                                the <code>{`justify-content: <value>`}</code>{" "}
                                property with inline styles. E.g.{" "}
                                <code>{`justify-content: end`}</code>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            <strong>
                                <code>{`--cluster-align`}</code>
                            </strong>{" "}
                            → adjusts the{" "}
                            <strong>alignment of items, i.e. children</strong>{" "}
                            inside the <strong>cluster</strong> by changing the{" "}
                            <code>{`align-items: <value>`}</code> property. Its{" "}
                            <strong>default value</strong> is{" "}
                            <code>{`center`}</code>.
                        </p>
                        <ul>
                            <li>
                                <strong>Note</strong> you can also just change
                                the <code>{`align-items: <value>`}</code>{" "}
                                property with inline styles. E.g.{" "}
                                <code>{`align-items: end`}</code>
                            </li>
                        </ul>
                    </li>
                </ul>

                <p>Default values</p>
                <div className="cluster">
                    {[...Array(10)].map((_, i) =>
                        i % 2 === 0 ? (
                            <div key={i} className="box bg-teal">
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red">
                                But stack where space is limited
                            </div>
                        )
                    )}
                </div>
                <p>
                    Using default &nbsp; <code>justify-content: center</code>
                </p>
                <div className="cluster">
                    {[...Array(10)].map((_, i) =>
                        i % 2 === 0 ? (
                            <div key={i} className="box bg-teal">
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red">
                                But stack where space is limited
                            </div>
                        )
                    )}
                </div>
                <hr />
                <p>
                    Using &nbsp; <code>justify-content: center</code>
                </p>
                <div
                    className="cluster justify-center"
                    style={{ justifyContent: "center" }}
                >
                    {[...Array(10)].map((_, i) =>
                        i % 2 === 0 ? (
                            <div key={i} className="box bg-teal">
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red">
                                But stack where space is limited
                            </div>
                        )
                    )}
                </div>
                <hr />
                <p>
                    Using &nbsp; <code>justify-content: end</code>
                </p>
                <div className="cluster" style={{ justifyContent: "end" }}>
                    {[...Array(10)].map((_, i) =>
                        i % 2 === 0 ? (
                            <div key={i} className="box bg-teal">
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red">
                                But stack where space is limited
                            </div>
                        )
                    )}
                </div>
                <hr />
                <p>
                    Using default &nbsp; <code>align-items: start</code>
                </p>
                <div className="cluster" style={{ alignItems: "start" }}>
                    {[...Array(10)].map((_, i) =>
                        i % 2 === 0 ? (
                            <div
                                key={i}
                                className="box bg-teal"
                                style={{ padding: "var(--space-2xl)" }}
                            >
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red">
                                But stack where space is limited
                            </div>
                        )
                    )}
                </div>
                <hr />
                <p>
                    Using &nbsp; <code>align-items: center</code>
                </p>
                <div className="cluster" style={{ alignItems: "center" }}>
                    {[...Array(10)].map((_, i) =>
                        i % 2 === 0 ? (
                            <div
                                key={i}
                                className="box bg-teal"
                                style={{ padding: "var(--space-2xl)" }}
                            >
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red">
                                But stack where space is limited
                            </div>
                        )
                    )}
                </div>
                <hr />
                <p>
                    Using &nbsp; <code>align-items: end</code>
                </p>
                <div
                    className="cluster items-end"
                    style={{ alignItems: "end" }}
                >
                    {[...Array(10)].map((_, i) =>
                        i % 2 === 0 ? (
                            <div
                                key={i}
                                className="box bg-teal"
                                style={{ padding: "var(--space-2xl)" }}
                            >
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red">
                                But stack where space is limited
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
