export function TheCluster() {
    return (
        <div className="center">
            <div className="stack [--stack-gap:theme(spacing.l)]">
                <h1>The Cluster</h1>
                <p>
                    Override default gap with &nbsp;{" "}
                    <code>{`gap-[space scale value]`}</code> E.g. ({" "}
                    <code>gap-md</code> )
                </p>
                <div className="cluster gap-l">
                    {[...Array(10)].map((_, i) =>
                        i % 2 === 0 ? (
                            <div key={i} className="box bg-teal-600">
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red-500/80">
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
                            <div key={i} className="box bg-teal-600">
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red-500/80">
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
                            <div key={i} className="box bg-teal-600">
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red-500/80">
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
                            <div key={i} className="box bg-teal-600">
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red-500/80">
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
                            <div key={i} className="box bg-teal-600 p-2xl">
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red-500/80">
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
                            <div key={i} className="box bg-teal-600 p-2xl">
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red-500/80">
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
                            <div key={i} className="box bg-teal-600 p-2xl">
                                Items that cluster
                            </div>
                        ) : (
                            <div key={i} className="box bg-red-500/80">
                                But stack where space is limited
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
