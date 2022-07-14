export function TheImposter() {
    return (
        <div className="stack">
            <h1>The Imposter</h1>
            <p>This class is useful for...</p>
            <p>
                All we need to do is add the &nbsp;{" "}
                <code>position: relative</code> property to whatever we want our
                relative container to be. This can easily be done by a utility
                class or your preferred method
            </p>
            <div className="box relative">
                <p className="p-xl">
                    {" "}
                    Static content that lives behind the imposter, you can tell
                    because it reaches the other side.
                </p>
                <div className="imposter  box">
                    <p>Superimposed Content</p>
                </div>
            </div>
            <p>
                We can also have our overlay contained withing its underlying
                element
            </p>
            <div className="box relative">
                <p className="p-xl">
                    Static content that lives behind the imposter, you can tell
                    because it reaches the other side.
                </p>
                <div className="imposter imposter-container [--imposter-container-margin:theme(spacing.s)] box p-xs">
                    <p>
                        Superimposed Content. Terms of Service Lorem ipsum
                        dolor, sit amet consectetur adipisicing elit. Voluptas,
                        quam laborum exercitationem mollitia in quisquam!
                        Voluptate molestias, laboriosam perspiciatis ut nemo
                        cumque alias aperiam, repellat suscipit itaque
                        praesentium quisquam, blanditiis qui deserunt deleniti
                        fugit voluptas labore eligendi ratione eius delectus.
                    </p>
                </div>
            </div>
            <p>
                The default behaviour is for it to be placed in the center but
                we can move it around to our heart's content by altering the
                &nbsp; <code>inset-block-start</code> and the &nbsp;{" "}
                <code>instet-inline-start</code> properties. Either by using
                utility classes or arbitrary properties.
            </p>
            <div className="box relative">
                <p className="p-xl">
                    {" "}
                    Static content that lives behind the imposter, you can tell
                    because it reaches the other side.
                </p>
                <div className="imposter inline-start-[100%] block-start-[0%] box | rounded-full bg-red-600">
                    <p>🔔</p>
                </div>
            </div>
        </div>
    );
}
