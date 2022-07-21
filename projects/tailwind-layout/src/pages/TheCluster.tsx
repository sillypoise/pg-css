export function TheCluster() {
    return (
        <div className="center">
            <div className="stack [--stack-gap:theme(spacing.l)]">
                <h1>The Cluster</h1>
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
                                the <code>{`gap-[]`}</code> utility class in
                                tailwind. E.g. <code>{`gap-m`}</code>
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
                                the <code>{`justify-[]`}</code> utility class in
                                tailwind. E.g. <code>{`justify-end`}</code>
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
                                the <code>{`items-[]`}</code> utility class in
                                tailwind. E.g. <code>{`items-end`}</code>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="cluster">
                    {[...Array(10)].map((_, i) =>
                        i % 2 === 0 ? (
                            <div key={i} className="box bg-teal-500/60">
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red-400/80">
                                But stack where space is limited
                            </div>
                        )
                    )}
                </div>
                <p>
                    Using default &nbsp; <code>justify-start</code>
                </p>
                <div className="cluster">
                    {[...Array(10)].map((_, i) =>
                        i % 2 === 0 ? (
                            <div key={i} className="box bg-teal-500/60">
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red-400/80">
                                But stack where space is limited
                            </div>
                        )
                    )}
                </div>
                <hr />
                <p>
                    Using &nbsp; <code>justify-center</code>
                </p>
                <div className="cluster justify-center">
                    {[...Array(10)].map((_, i) =>
                        i % 2 === 0 ? (
                            <div key={i} className="box bg-teal-500/60">
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red-400/80">
                                But stack where space is limited
                            </div>
                        )
                    )}
                </div>
                <hr />
                <p>
                    Using &nbsp; <code>justify-end</code>
                </p>
                <div className="cluster justify-end">
                    {[...Array(10)].map((_, i) =>
                        i % 2 === 0 ? (
                            <div key={i} className="box bg-teal-500/60">
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red-400/80">
                                But stack where space is limited
                            </div>
                        )
                    )}
                </div>
                <hr />
                <p>
                    Using default &nbsp; <code>items-start</code>
                </p>
                <div className="cluster items-start">
                    {[...Array(10)].map((_, i) =>
                        i % 2 === 0 ? (
                            <div key={i} className="box bg-teal-500/60 p-2xl">
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red-400/80">
                                But stack where space is limited
                            </div>
                        )
                    )}
                </div>
                <hr />
                <p>
                    Using &nbsp; <code>items-center</code>
                </p>
                <div className="cluster items-center">
                    {[...Array(10)].map((_, i) =>
                        i % 2 === 0 ? (
                            <div key={i} className="box bg-teal-500/60 p-2xl">
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red-400/80">
                                But stack where space is limited
                            </div>
                        )
                    )}
                </div>
                <hr />
                <p>
                    Using &nbsp; <code>items-end</code>
                </p>
                <div className="cluster items-end">
                    {[...Array(10)].map((_, i) =>
                        i % 2 === 0 ? (
                            <div key={i} className="box bg-teal-500/60 p-2xl">
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red-400/80">
                                But stack where space is limited
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
