export function TheCover() {
    return (
        <div className="center">
            <div className="stack">
                <h1>The Cover</h1>
                <p>
                    Center content <strong>vertically</strong> and accomodate a{" "}
                    <strong>top</strong> and <strong>bottom</strong> element
                    that will be pushed to the edges.
                </p>
                <p>
                    Add the <code>{`cover`}</code> class to your container.
                    Inside the container you can now simply add the{" "}
                    <code>{`cover-target`}</code> class to the element you want
                    centered and pushing away all other elements inside it
                </p>
                <p>
                    Worth noting is that <strong>by default</strong> the
                    container has a <code>{`min-block-size`}</code> property
                    with the default value of <code>{`100vh`}</code>. Which is
                    reasonable considering the purpose of the class. However you
                    can modify this to any <em>block size</em> you want if you
                    find yourself needing it. You can do so by overriding the{" "}
                    <code>{`--cover-min-block`}</code> custom property. E.g.{" "}
                    <code>{`--cover-min-block: 40rem`}</code>
                </p>
                <p>
                    You can also just adjust the <code>{`min-bs-[]`}</code>{" "}
                    utility class in tailwind to adjust the block size of the
                    container.
                </p>
                <div className="cover | debug">
                    <header className="box | bg-teal-500/80">HEADER</header>
                    <h1 className="cover-target | box  bg-red-400/80">
                        I AM THE CONTENT YOU WANT FRONT AND CENTER!!!
                    </h1>
                    <footer className="box | bg-teal-500/80">FOOTER</footer>
                </div>
                <hr />
                <p>
                    When you have more children you can control the spacing
                    between the children that are being push by overriding the{" "}
                    <code>{`--cover-spacing`}</code> property. Its{" "}
                    <strong>default value</strong> is set to{" "}
                    <code>{`theme(spacing.xs)`}</code>
                </p>
                <div className="cover [--cover-spacing:theme(spacing.3xs)] | debug">
                    <header className="box | bg-teal-500/80">HEADER</header>
                    <div className="box">A</div>
                    <div className="box">B</div>
                    <div className="box  bg-red-400/80">
                        I was... the content you previously had front and center
                        😢
                    </div>
                    <h3 className="box cover-target">
                        🏴‍☠️ I AM THE CAPTAIN NOW
                    </h3>
                    <div className="box">B</div>
                    <footer className="box | bg-teal-500/80">FOOTER</footer>
                </div>
                <hr />
                <p>
                    <strong>Note</strong>that this container class will still
                    work if you have children only on one side of the{" "}
                    <strong>cover target</strong>
                </p>
                <p>
                    Only a single element below our target. None above it.{" "}
                    <code>{`--cover-min-block`}</code> value is{" "}
                    <code>{`60rem`}</code>
                </p>
                <div className="cover [--cover-min-block:60rem] | debug">
                    <h1 className="cover-target | box bg-red-400/80">
                        I AM THE CONTENT YOU WANT FRONT AND CENTER!!!
                    </h1>
                    <div className="box | bg-teal-500/80">FOOTER</div>
                </div>
                <p>
                    Only a single element above our target. None below it.{" "}
                    <code>{`min-bs-[]`}</code> value is{" "}
                    <code>{`min-bs-[60rem]`}</code>
                </p>
                <div className="cover min-bs-[60rem] | debug">
                    <div className="box bg-teal-500/80">HEADER</div>
                    <h1 className="cover-target | box bg-red-400/80">
                        I AM THE CONTENT YOU WANT FRONT AND CENTER!!!
                    </h1>
                </div>
            </div>
        </div>
    );
}
