import React from "react";

export function TheFrame() {
    return (
        <div className="center ">
            <div className="stack">
                <h1>The Frame</h1>
                <p>
                    A handy container for images, videos and canvases in which
                    it will mantain the content centered and in the appropriate
                    indicated aspect ratio.
                </p>
                <p>
                    Simply add the <code>{`frame`}</code> class to your
                    container. To define the aspect ratio that container should
                    mantain override the{" "}
                    <strong>
                        <code>{`--frame-ratio`}</code>
                    </strong>{" "}
                    custom property, which adjusts the{" "}
                    <code>{`aspect-ratio`}</code> property. Its{" "}
                    <strong>default value</strong> is <code>{`1`}</code>.
                </p>
                <p>
                    Default value {""}
                    <code>{`--frame-ratio: 1`}</code> - (<code>1:1</code>)
                </p>
                <div className="auto-grid">
                    <div className="frame | bg-teal box"></div>
                    <div className="frame | bg-red box"></div>
                    <div className="frame | bg-teal box"></div>
                </div>
                <hr />
                <p>
                    <code>{`--frame-ratio: 1.33`}</code> - (<code>1.33:1</code>)
                </p>
                <div className="auto-grid">
                    <div
                        className="frame bg-red | box"
                        style={
                            {
                                "--frame-ratio": "1.33",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame bg-teal | box"
                        style={
                            {
                                "--frame-ratio": "1.33",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame bg-red  | box"
                        style={
                            {
                                "--frame-ratio": "1.33",
                            } as React.CSSProperties
                        }
                    ></div>
                </div>
                <hr />
                <p>
                    <code>{`--frame-ratio: 1.78`}</code> - ( <code>1.78:1</code>
                    )
                </p>
                <div className="auto-grid">
                    <div
                        className="frame | bg-teal box"
                        style={
                            {
                                "--frame-ratio": "1.78",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame | bg-red box"
                        style={
                            {
                                "--frame-ratio": "1.78",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame | bg-teal box"
                        style={
                            {
                                "--frame-ratio": "1.78",
                            } as React.CSSProperties
                        }
                    ></div>
                </div>
                <hr />
                <p>
                    <code>{`--frame-ratio: 1.85`}</code> - ( <code>1.85:1</code>
                    )
                </p>
                <div className="auto-grid">
                    <div
                        className="frame bg-red | box"
                        style={
                            {
                                "--frame-ratio": "1.85",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame bg-teal | box"
                        style={
                            {
                                "--frame-ratio": "1.85",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame bg-red | box"
                        style={
                            {
                                "--frame-ratio": "1.85",
                            } as React.CSSProperties
                        }
                    ></div>
                </div>
                <hr />
                <p>
                    <code>{`--frame-ratio: 2.0`}</code> - ( <code>2.0:1</code>)
                </p>
                <div className="auto-grid">
                    <div
                        className="frame | bg-teal box"
                        style={
                            {
                                "--frame-ratio": "2.0",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame | bg-red box"
                        style={
                            {
                                "--frame-ratio": "2.0",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame | bg-teal box"
                        style={
                            {
                                "--frame-ratio": "2.0",
                            } as React.CSSProperties
                        }
                    ></div>
                </div>
                <hr />
                <p>
                    <code>{`--frame-ratio: 2.35`}</code> - ( <code>2.35:1</code>
                    )
                </p>
                <div className="auto-grid">
                    <div
                        className="frame bg-red | box"
                        style={
                            {
                                "--frame-ratio": "2.35",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame bg-teal | box"
                        style={
                            {
                                "--frame-ratio": "2.35",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame bg-red  | box"
                        style={
                            {
                                "--frame-ratio": "2.35",
                            } as React.CSSProperties
                        }
                    ></div>
                </div>
                <hr />
                <p>
                    <code>{`--frame-ratio: 2.39`}</code> - ( <code>2.39:1</code>
                    )
                </p>
                <div className="auto-grid">
                    <div
                        className="frame | bg-teal box"
                        style={
                            {
                                "--frame-ratio": "2.39",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame | bg-red box"
                        style={
                            {
                                "--frame-ratio": "2.39",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame | bg-teal box"
                        style={
                            {
                                "--frame-ratio": "2.39",
                            } as React.CSSProperties
                        }
                    ></div>
                </div>
                <hr />
                <p>
                    <code>{`--frame-ratio: 2.55`}</code> - ( <code>2.55:1</code>
                    )
                </p>
                <div className="auto-grid">
                    <div
                        className="frame bg-red | box"
                        style={
                            {
                                "--frame-ratio": "2.55",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame bg-teal | box"
                        style={
                            {
                                "--frame-ratio": "2.55",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame bg-red | box"
                        style={
                            {
                                "--frame-ratio": "2.55",
                            } as React.CSSProperties
                        }
                    ></div>
                </div>
                <hr />
                <p>
                    <code>{`--frame-ratio: 2.76`}</code> - ( <code>2.76:1</code>
                    )
                </p>
                <div className="auto-grid">
                    <div
                        className="frame bg-red | box"
                        style={
                            {
                                "--frame-ratio": "2.76",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame bg-teal | box"
                        style={
                            {
                                "--frame-ratio": "2.76",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame bg-red | box"
                        style={
                            {
                                "--frame-ratio": "2.76",
                            } as React.CSSProperties
                        }
                    ></div>
                </div>
                <hr />
                <p>
                    <code>{`--frame-ratio: 3.0`}</code> - ( <code>3.0:1</code>)
                </p>
                <div className="auto-grid">
                    <div
                        className="frame bg-red | box"
                        style={
                            {
                                "--frame-ratio": "3.0",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame bg-teal | box"
                        style={
                            {
                                "--frame-ratio": "3.0",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame bg-red | box"
                        style={
                            {
                                "--frame-ratio": "3.0",
                            } as React.CSSProperties
                        }
                    ></div>
                </div>
                <hr />
                <p>
                    <code>{`--frame-ratio: 4.0`}</code> - ( <code>4.0:1</code>)
                </p>
                <div className="auto-grid">
                    <div
                        className="frame bg-red | box"
                        style={
                            {
                                "--frame-ratio": "4.0",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame bg-teal | box"
                        style={
                            {
                                "--frame-ratio": "4.0",
                            } as React.CSSProperties
                        }
                    ></div>
                    <div
                        className="frame bg-red | box"
                        style={
                            {
                                "--frame-ratio": "4.0",
                            } as React.CSSProperties
                        }
                    ></div>
                </div>
            </div>
        </div>
    );
}
