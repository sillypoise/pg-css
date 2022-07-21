import React from "react";

export function TheSidebar() {
    return (
        <article className="center">
            <div className="stack">
                <h1>The Sidebar</h1>
                <p>
                    Justs add the custom <code>sidebar</code> utility class.
                    Then proceed to customize the sidebar's children through
                    properties. Specifically:
                </p>
                <ul className="stack">
                    <li>
                        <p>
                            <strong>
                                <code>{`--sidebar-gap`}</code>
                            </strong>{" "}
                            → adjusts the gap of the actual{" "}
                            <strong>sidebar</strong> by changing the value of
                            the <code>{`gap: []rem;`}</code> property. Its{" "}
                            <strong>default value</strong> is{" "}
                            <code>var(--space-xs)</code>
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>
                                <code>{`--sidebar-width`}</code>
                            </strong>{" "}
                            → adjusts the width of the actual{" "}
                            <strong>sidebar</strong> by changing the value of
                            the <code>{`flex-basis: []rem;`}</code> property.
                            Its <strong>default value</strong> is{" "}
                            <code>var(--space-5xl)</code>
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>
                                <code>{`--sidebar-threshold`}</code>
                            </strong>{" "}
                            → adjusts the percentage breaking point threshold of
                            the sidebar by changing the{" "}
                            <code>{`min-inline-size: []%`}</code> property. Its{" "}
                            <strong>default value</strong> is <code>50%</code>{" "}
                            which means it will break when both sidebar and
                            content are of equal size
                        </p>
                    </li>
                </ul>
                <p>
                    Breaks at <code>50%</code> and has an <code>xs</code> gap
                </p>
                <div
                    className="sidebar | debug"
                    style={
                        {
                            "--sidebar-gap": "var(--space-3xs)",
                        } as React.CSSProperties
                    }
                >
                    <div className="box bg-red">I am the sidebar</div>
                    <div className="box bg-teal">
                        I am the content that has a sidebar and will stack when
                        I am equal width as the sidebar
                    </div>
                </div>
                <p>
                    Breaks at <code>70%</code>. Try shrinking the window to see
                    the difference.
                </p>
                <div
                    className="sidebar | debug"
                    style={
                        {
                            "--sidebar-gap": "var(--space-xs)",
                            "--sidebar-threshold": "70%",
                        } as React.CSSProperties
                    }
                >
                    <div className="box bg-red">I am the sidebar</div>
                    <div className="box bg-teal">
                        I am the content that has a sidebar and will stack when
                        I am equal width as the sidebar
                    </div>
                </div>
                <p>
                    Add the <code>data-direction</code> attribute and give it a
                    value of <code>rtl</code> to <em>flip the sidebar</em>.
                    &nbsp;(
                    <code>data-direction="rtl"</code> )
                </p>
                <div className="sidebar | debug" data-direction="rtl">
                    <div className="box bg-teal">
                        I am the content that has a sidebar and will stack when
                        I am equal width as the sidebar
                    </div>
                    <div className="box bg-red">I am the sidebar</div>
                </div>
            </div>
        </article>
    );
}
