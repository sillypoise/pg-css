import React from "react";

export function TheImposter() {
    return (
        <div className="stack">
            <h1>The Imposter</h1>
            <p>
                Add the <code>{`imposter`}</code> class to the element you want
                super impose.
            </p>
            <p>
                Then all we need to do is add the &nbsp;{" "}
                <code>position: relative</code> property to whatever we want our
                relative container to be. This can easily be done by a utility
                class or your preferred method
            </p>
            <div
                className="box"
                style={{
                    position: "relative",
                }}
            >
                <p style={{ padding: "var(--space-xl)" }}>
                    {" "}
                    Static content that lives behind the imposter, you can tell
                    because it reaches the other side.
                </p>
                <div className="imposter box">
                    <p>Superimposed Content</p>
                </div>
            </div>
            <p>
                We can also have our overlay <strong>contained</strong> within
                its underlying element by adding the{" "}
                <code>{`imposter-contained`}</code> class. This is useful if you
                want to keep to imposter conained inside a specific element
            </p>
            <div
                className="stack"
                style={
                    {
                        "--stack-gap": "var(--space-2xl)",
                    } as React.CSSProperties
                }
            >
                <p>
                    Without <code>{`imposter-contained`}</code>. Only{" "}
                    <code>{`imposter`}</code> class applied.
                </p>
                <div
                    className="box"
                    style={{
                        position: "relative",
                    }}
                >
                    <p style={{ padding: "var(--space-xl)" }}>
                        Static content that lives behind the imposter, you can
                        tell because it reaches the other side.
                    </p>
                    <div
                        className="imposter box"
                        style={
                            {
                                padding: "var(--space-xs)",
                                "--imposter-margin": "var(--space-s)",
                            } as React.CSSProperties
                        }
                    >
                        <p>
                            Terms of Service Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Voluptas, quam laborum
                            exercitationem mollitia in quisquam! Voluptate
                            molestias, laboriosam perspiciatis ut nemo cumque
                            alias aperiam, repellat suscipit itaque praesentium
                            quisquam, blanditiis qui deserunt deleniti fugit
                            voluptas labore eligendi ratione eius delectus.
                        </p>
                    </div>
                </div>
                <p>
                    With <code>{`imposter-contained`}</code>.{" "}
                    <strong>Note</strong> we can adjust the margins of the
                    contained imposter, against its container, by overriding the{" "}
                    <code>{`--imposter-margin`}</code> custom property. E.g.{" "}
                    <code>{`[--imposter-margin:var(--space-l)]`}</code>
                </p>
                <div
                    className="box"
                    style={{
                        position: "relative",
                    }}
                >
                    <p style={{ padding: "var(--space-xl)" }}>
                        Static content that lives behind the imposter, you can
                        tell because it reaches the other side.
                    </p>
                    <div
                        className="imposter imposter-contained box"
                        style={
                            {
                                padding: "var(--space-xs)",
                                "--imposter-margin": "var(--space-l)",
                            } as React.CSSProperties
                        }
                    >
                        <p>
                            <strong>Terms of Service</strong> Lorem ipsum dolor,
                            sit amet consectetur adipisicing elit. Voluptas,
                            quam laborum exercitationem mollitia in quisquam!
                            Voluptate molestias, laboriosam perspiciatis ut nemo
                            cumque alias aperiam, repellat suscipit itaque
                            praesentium quisquam, blanditiis qui deserunt
                            deleniti fugit voluptas labore eligendi ratione eius
                            delectus.
                        </p>
                    </div>
                </div>
            </div>
            <p>
                The default behaviour of <strong>The Impostor</strong> is for it
                to be placed in the center but we can move it around to our
                heart's content by altering the &nbsp;{" "}
                <code>inset-block-start</code> and the &nbsp;{" "}
                <code>inset-inline-start</code> properties. We can do so by
                overriding the <code>--imposter-inset-inline</code> and the{" "}
                <code>--imposter-inset-block</code> custom properties or adding
                inline styles for those properties.
            </p>
            <p>
                Create a notification bell by adjusting the{" "}
                <strong>inset</strong> values. E.g.{" "}
                <code>{`--imposter-inset-inline: 100%`}</code> and{" "}
                <code>{`--imposter-inset-block: 0%`}</code>
            </p>
            <div
                className="box"
                style={{
                    position: "relative",
                }}
            >
                <p
                    style={{
                        padding: "var(--space-xl)",
                    }}
                >
                    {" "}
                    Static content that lives behind the imposter, you can tell
                    because it reaches the other side.
                </p>
                <div
                    className="imposter box"
                    style={
                        {
                            "--imposter-inset-inline": "100%",
                            "--imposter-inset-block": "0%",
                            borderRadius: "9999px",
                            backgroundColor: "var(--red-500)",
                        } as React.CSSProperties
                    }
                >
                    <p>🔔</p>
                </div>
            </div>
            <p>
                Finally if you wish <strong>The Imposter</strong> to be fixed
                relative to the <strong>viewport</strong> , rather than the
                document or an element, i.e. positioning container with the{" "}
                <code>{`relative`}</code> value, within the document, you can
                overwrite the <code>{`--imposter-positioning`}</code> with a{" "}
                <code>{`fixed`}</code> value. This is often desirable for
                dialogs, which should follow the user as they scroll the
                document, and remain in view until tended to. Like our friendly{" "}
                <strong>red baloon</strong>(<span>🎈</span>) example below.
            </p>
            <dialog
                open
                className="imposter box"
                style={
                    {
                        padding: "var(--space-xs)",
                        "--imposter-positioning": "fixed",
                        "--imposter-inset-inline": "50%",
                        "--imposter-inset-block": "89%",
                    } as React.CSSProperties
                }
            >
                <p>
                    <span>🎈</span> We have overridden the{" "}
                    <code>{`--imposter-positioning`}</code> custom property to{" "}
                    <code>{`fixed`}</code>. And positioned this through{" "}
                    <code>inset</code> values. This is a{" "}
                    <code>{`<dialog>`}</code> element.
                </p>
            </dialog>
            <hr />
        </div>
    );
}
