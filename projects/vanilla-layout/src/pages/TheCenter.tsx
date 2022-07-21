import React from "react";

export function TheCenter() {
    return (
        <div className="center stack">
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
                        value is <code>var(--content-width-4)</code>
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
                        <code>var(--spacing-s)</code>
                    </p>
                </li>
            </ul>
            <p>
                This has a <code>max-inline-size</code> of <code>50ch</code> and
                a <code>padding-inline</code> value of{" "}
                <code>var(--space-xl)</code>
            </p>
            <div
                className="center | debug"
                style={
                    {
                        "--center-width": "50ch",
                        "--center-padding": "var(--space-xl)",
                    } as React.CSSProperties
                }
            >
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
                <code>var(--content-width-3)</code> and a{" "}
                <code>padding-inline</code> value of{" "}
                <code>var(--space-xl)</code>
            </p>
            <div
                className="center | debug"
                style={
                    {
                        "--center-width": "var(--content-width-3)",
                        "--center-padding": "var(--space-xl)",
                    } as React.CSSProperties
                }
            >
                <p>
                    Override the&nbsp; <code>max-inline-size</code> property!
                    E.g.&nbsp;(
                    <code>max-is-[50ch]</code>)
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
                <code>var(--content-width-1)</code> and a{" "}
                <code>padding-inline</code> value of{" "}
                <code>var(--space-xs)</code>
            </p>
            <div
                className="center | debug"
                style={
                    {
                        "--center-width": "var(--content-width-1)",
                        "--center-padding": "var(--space-3xs)",
                    } as React.CSSProperties
                }
            >
                <p>
                    Override the&nbsp; <code>padding-inline</code> property!
                    E.g.&nbsp;(
                    <code>pli-xl</code>).{" "}
                </p>
                <p>
                    <em>View in responsive mode to see difference!</em>
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
