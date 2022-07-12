export function TheCluster() {
    return (
        <div className="center">
            <div className="stack stack-gap:mbs-lg">
                <h2>The Cluster</h2>
                <p>
                    Override default gap with the &nbsp;
                    <code>{`gap`}</code> property E.g. ({" "}
                    <code>gap: var(--space-m)</code> )
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
