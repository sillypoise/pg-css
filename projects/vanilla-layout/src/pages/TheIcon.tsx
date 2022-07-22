import React from "react";

export function TheIcon() {
    return (
        <div className="stack">
            <h1>The Icon</h1>
            <p>For icons duh...</p>
            <div className="box">
                <p>
                    <span className="with-icon">
                        <svg
                            viewBox="0 0 10 10"
                            stroke="currentColor"
                            className="icon"
                            stroke-width="2"
                        >
                            <path d="M1,1 9,9 M9,1 1,9" />
                        </svg>
                    </span>
                    Let's make this text a little bigger in size
                </p>
            </div>
            <p>
                What if we place it inside a container that has larger font
                size?
            </p>
            <div className="box">
                <p className="text-3 text-red-600">
                    <span className="with-icon" aria-label="close">
                        <svg
                            viewBox="0 0 10 10"
                            className="icon"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path d="M1,1 9,9 M9,1 1,9" />
                        </svg>
                    </span>
                    Let's make this text a little bigger in size
                </p>
            </div>
            <p>
                Override the <code>{`--icon-space`}</code> custom property to
                adjust the margin between the icon and the text. E.g.{" "}
                <code>{`--icon-space:var(--space-l)`}</code>
            </p>
            <div className="box">
                <p
                    style={{
                        fontSize: "var(--step-3)",
                        color: "var(--red-600)",
                    }}
                >
                    <span
                        className="with-icon"
                        style={
                            {
                                "--icon-space": "var(--space-2xl)",
                            } as React.CSSProperties
                        }
                        aria-label="close"
                    >
                        <svg
                            viewBox="0 0 10 10"
                            className="icon"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path d="M1,1 9,9 M9,1 1,9" />
                        </svg>
                    </span>
                    A whole lot of margin
                </p>
            </div>
        </div>
    );
}
