export function TheSidebar() {
    return (
        <div className="center">
            <div className="stack">
                <h1>The Sidebar</h1>
                <p>
                    Justs add the custom <code>sidebar</code> utility class.
                    Then proceed to customize the sidebar's children with the{" "}
                    <code>{`basis-[space scale value]`}</code> and the{" "}
                    <code>{`min-is-[space scale value]`}</code> Tailwind utility
                    classes.
                </p>
                <div className="sidebar [--sidebar-width:theme(spacing.6xl)] [--sidebar-threshold:70%] gap-s | debug">
                    <div className="box | bg-red-400/80">I am the sidebar</div>
                    <div className="box | bg-teal-600">
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
                <p>
                    However make sure to flip around the utility classes for the
                    sidebar to work. Define the <code>flex-basis</code> in the
                    element supposed to be the sidebar to determine it's length
                    and define the <code>min-inline-size</code> in the element
                    containing the content..
                </p>
                <div
                    className="sidebar [--sidebar-width:theme(spacing.6xl)] gap-s | debug"
                    data-direction="rtl"
                >
                    <div className="box | bg-teal-600">
                        I am the content that has a sidebar and will stack when
                        I am equal width as the sidebar
                    </div>
                    <div className="box | bg-red-400/80">I am the sidebar</div>
                </div>
            </div>
        </div>
    );
}
