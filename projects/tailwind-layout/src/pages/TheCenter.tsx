export function TheCenter() {
    return (
        <div className="stack">
            <h1>The Center</h1>
            <p>
                Center any content using the <code>.center</code> class. To
                customize its behaviour you can change the following custom
                properties:
            </p>
            <ul>
                <li>
                    <p>
                        <strong>
                            <code>--center-width</code>
                        </strong>{" "}
                        → adjusts the max-length of a containers content by
                        changing the value of the <code>max-inline-size</code>{" "}
                        property. Usually done through a value with a{" "}
                        <code>ch</code> unit. It's <strong>default</strong>{" "}
                        value is <code>theme(contentWidth.4)</code>
                        <ul className="stack">
                            <li>
                                <p>
                                    Alternatively use the <code>max-is-[]</code>{" "}
                                    property with an arbitrary value. E.g.{" "}
                                    <code>max-is-[65ch]</code>
                                </p>
                            </li>
                        </ul>
                    </p>
                </li>
                <li>
                    <p>
                        <strong>
                            <code>--center-padding</code>
                        </strong>{" "}
                        → adjusts the x-axis padding of the container by
                        changing the value of the <code>padding-inline</code>{" "}
                        property. It's <strong>default</strong> value is{" "}
                        <code>theme(spacing.s)</code>
                        <ul>
                            <li>
                                <p>
                                    Alternatively use the <code>pli-[]</code>{" "}
                                    property with an arbitrary value. E.g.{" "}
                                    <code>pli-[3xl]</code>
                                </p>
                            </li>
                        </ul>
                    </p>
                </li>
            </ul>
            <p>
                This has a <code>max-inline-size</code> of <code>50ch</code> and
                a <code>padding-inline</code> value of{" "}
                <code>theme(spacing.xl)</code>
            </p>
            <div className="center max-is-[50ch] pli-xl | debug">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas dolorem recusandae dolore quidem magnam fugiat labore
                    enim ipsam vero voluptas esse alias reiciendis unde, error,
                    ex tempora! Obcaecati quis velit nihil optio modi voluptate
                    quisquam soluta eius illum eaque, fuga quasi laborum vel
                    possimus similique laboriosam esse sequi aperiam aliquid
                    voluptatum nulla iure!
                </p>
            </div>
            <p>
                This has a <code>max-inline-size</code> of{" "}
                <code>theme(contentWidth.3)</code> and a{" "}
                <code>padding-inline</code> value of{" "}
                <code>theme(spacing.xl)</code>
            </p>
            <div className="center [--center-width:theme(contentWidth.3)] [--center-padding:theme(spacing.xl)] | debug">
                <p>
                    Override the&nbsp; <code>max-inline-size</code> property!
                    E.g.&nbsp;(
                    <code>[max-is-[50ch]]</code>)
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas dolorem recusandae dolore quidem magnam fugiat labore
                    enim ipsam vero voluptas esse alias reiciendis unde, error,
                    ex tempora! Obcaecati quis velit nihil optio modi voluptate
                    quisquam soluta eius illum eaque, fuga quasi laborum vel
                    possimus similique laboriosam esse sequi aperiam aliquid
                    voluptatum nulla iure!
                </p>
            </div>
            <p>
                This has a <code>max-inline-size</code> of{" "}
                <code>theme(contentWidth.1)</code> and a{" "}
                <code>padding-inline</code> value of{" "}
                <code>theme(spacing.xs)</code>
            </p>
            <div className="center [--center-width:theme(contentWidth.1)] pli-3xs | debug">
                <p>
                    Override the&nbsp; <code>padding-inline</code> property!
                    E.g.&nbsp;(
                    <code>pli-xl</code>).{" "}
                    <p>
                        <em>View in responsive mode to see difference!</em>
                    </p>
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas dolorem recusandae dolore quidem magnam fugiat labore
                    enim ipsam vero voluptas esse alias reiciendis unde, error,
                    ex tempora! Obcaecati quis velit nihil optio modi voluptate
                    quisquam soluta eius illum eaque, fuga quasi laborum vel
                    possimus similique laboriosam esse sequi aperiam aliquid
                    voluptatum nulla iure!
                </p>
            </div>
        </div>
    );
}
