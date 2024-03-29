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
                    Alternatively you can also override the{" "}
                    <code>{`aspect-ratio`}</code> property by using the{" "}
                    <code>{`aspect-[]`}</code> utlilty class in tailwind
                </p>
                <p>
                    <code>aspect-[1]</code> - (<code>1:1</code>)
                </p>
                <div className="auto-grid">
                    <div className="frame aspect-[1] | bg-teal-500 box"></div>
                    <div className="frame aspect-[1] | bg-red-400 box"></div>
                    <div className="frame aspect-[1] | bg-teal-500 box"></div>
                </div>
                <hr />
                <p>
                    <code>aspect-[1.33]</code> - (<code>1.33:1</code>)
                </p>
                <div className="auto-grid">
                    <div className="frame aspect-[1.33] bg-red-400 | box"></div>
                    <div className="frame aspect-[1.33] bg-teal-500 | box"></div>
                    <div className="frame aspect-[1.33] bg-red-400  | box"></div>
                </div>
                <hr />
                <p>
                    <code>aspect-[1.78]</code> - ( <code>1.78:1</code>)
                </p>
                <div className="auto-grid">
                    <div className="frame aspect-[1.78] | bg-teal-500 box"></div>
                    <div className="frame aspect-[1.78] | bg-red-400 box"></div>
                    <div className="frame aspect-[1.78] | bg-teal-500 box"></div>
                </div>
                <hr />
                <p>
                    <code>aspect-[1.85]</code> - ( <code>1.85:1</code>)
                </p>
                <div className="auto-grid">
                    <div className="frame aspect-[1.85] bg-red-400 | box"></div>
                    <div className="frame aspect-[1.85] bg-teal-500 | box"></div>
                    <div className="frame aspect-[1.85] bg-red-400  | box"></div>
                </div>
                <hr />
                <p>
                    <code>aspect-[2.0]</code> - ( <code>2.0:1</code>)
                </p>
                <div className="auto-grid">
                    <div className="frame aspect-[2.0] | bg-teal-500 box"></div>
                    <div className="frame aspect-[2.0] | bg-red-400 box"></div>
                    <div className="frame aspect-[2.0] | bg-teal-500 box"></div>
                </div>
                <hr />
                <p>
                    <code>aspect-[2.35]</code> - ( <code>2.35:1</code>)
                </p>
                <div className="auto-grid">
                    <div className="frame aspect-[2.35] bg-red-400 | box"></div>
                    <div className="frame aspect-[2.35] bg-teal-500 | box"></div>
                    <div className="frame aspect-[2.35] bg-red-400  | box"></div>
                </div>
                <hr />
                <p>
                    <code>aspect-[2.39]</code> - ( <code>2.39:1</code>)
                </p>
                <div className="auto-grid">
                    <div className="frame aspect-[2.39] | bg-teal-500 box"></div>
                    <div className="frame aspect-[2.39] | bg-red-400 box"></div>
                    <div className="frame aspect-[2.39] | bg-teal-500 box"></div>
                </div>
                <hr />
                <p>
                    <code>aspect-[2.55]</code> - ( <code>2.55:1</code>)
                </p>
                <div className="auto-grid">
                    <div className="frame aspect-[2.55] bg-red-400 | box"></div>
                    <div className="frame aspect-[2.55] bg-teal-500 | box"></div>
                    <div className="frame aspect-[2.55] bg-red-400  | box"></div>
                </div>
                <hr />
                <p>
                    <code>aspect-[2.76]</code> - ( <code>2.76:1</code>)
                </p>
                <div className="auto-grid">
                    <div className="frame aspect-[2.76] | bg-teal-500 box"></div>
                    <div className="frame aspect-[2.76] | bg-red-400 box"></div>
                    <div className="frame aspect-[2.76] | bg-teal-500 box"></div>
                </div>
                <hr />
                <p>
                    <code>{`aspect-[3.0]`}</code> - ( <code>3.0:1</code>)
                </p>
                <div className="auto-grid">
                    <div className="frame aspect-[3.0] bg-red-400 | box"></div>
                    <div className="frame aspect-[3.0] bg-teal-500 | box"></div>
                    <div className="frame aspect-[3.0] bg-red-400  | box"></div>
                </div>
                <hr />
                <p>
                    <code>{`aspect-[4.0]`}</code> - ( <code>4.0:1</code>)
                </p>
                <div className="auto-grid">
                    <div className="frame aspect-[4.0] | bg-teal-500 box"></div>
                    <div className="frame aspect-[4.0] | bg-red-400 box"></div>
                    <div className="frame aspect-[4.0] | bg-teal-500 box"></div>
                </div>
            </div>
        </div>
    );
}
