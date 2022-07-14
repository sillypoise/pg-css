export function TheCenter() {
    return (
        <div className="center stack">
            <h1>The Center</h1>
            <div className="center max-is-[60ch]  pli-3xl | debug">
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
            <div className="center [--center-width:theme(contentWidth.3)] pli-xl | debug">
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
            <div className="center [--center-width:theme(contentWidth.1)] pli-3xl | debug">
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
