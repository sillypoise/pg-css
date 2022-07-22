export function TheSwitcher() {
    return (
        <article className="center">
            <div className="stack">
                <h1>The Switcher</h1>
                <p>
                    A handy layout component that is very useful for laying out
                    elements you <em>always</em> want either to be horizontally
                    stacked or vertically stacked. But not anything in between.{" "}
                </p>
                <p>
                    Change to responsive viewport to see the <em>switch</em>!
                </p>

                <p>
                    You can change the behaviour of the{" "}
                    <strong>switcher</strong> container by through properties.
                    Specifically:
                </p>
                <ul className="stack">
                    <li>
                        <p>
                            <strong>
                                <code>{`--switcher-gap`}</code>
                            </strong>{" "}
                            → adjusts the gap of the actual{" "}
                            <strong>switcher</strong> by changing the value of
                            the <code>{`gap: []rem;`}</code> property. Its{" "}
                            <strong>default value</strong> is{" "}
                            <code>{`theme(spacing.s)`}</code>
                        </p>
                        <ul>
                            <li>
                                <strong>Note</strong> you can also just change
                                the <code>{`gap-[]`}</code> utility class in
                                tailwind. E.g. <code>{`gap-m`}</code>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            <strong>
                                <code>{`--switcher-threshold`}</code>
                            </strong>{" "}
                            → adjusts the breking point of the switcher, i.e.
                            the minimum width it can be before it{" "}
                            <strong>switches</strong> from a horizontal stack to
                            a vertical stack. It does so by changing a value of
                            a<code>{`calc`}</code> function, which itself is
                            defined in the
                            <code>{`flex-basis`}</code> property of the
                            switcher. Its <strong>default value</strong> is{" "}
                            <code>{`30rem`}</code>
                        </p>
                    </li>
                </ul>
                <p>
                    Given a threshold the layout will always try to horizontally
                    place the elements as long as the container fits that
                    threshold. Once it goes <strong>under the threshold</strong>{" "}
                    the component will switch to a vertical layout.
                </p>
                <p>
                    Effectively that means that if the width of the whole
                    container goes below, e.g. <code>50rem</code>(
                    <code>800px</code>), it's childs will stack vertically and
                    grow as much as they need.
                </p>
                <p>
                    The threshold is <code>50rem</code>
                </p>
                <div className="switcher [--switcher-threshold:50rem]">
                    <div className="box bg-teal-500/60">A</div>
                    <div className="box bg-teal-500/60">B</div>
                    <div className="box bg-teal-500/60">C</div>
                    <div className="box bg-teal-500/60">D</div>
                </div>
                <p>
                    The threshold is <code>58rem</code>
                </p>
                <div className="switcher [--switcher-threshold:58rem]">
                    <div className="box bg-teal-500/60">A</div>
                    <div className="box bg-teal-500/60">B</div>
                    <div className="box bg-teal-500/60">C</div>
                    <div className="box bg-teal-500/60">D</div>
                </div>
                <p>
                    The threshold is <code>25rem</code>
                </p>
                <div className="switcher [--switcher-threshold:25rem]">
                    <div className="box bg-teal-500/60">A</div>
                    <div className="box bg-teal-500/60">B</div>
                    <div className="box bg-teal-500/60">C</div>
                    <div className="box bg-teal-500/60">D</div>
                </div>
                <hr />
                <p>
                    There is another customization we can make to the switcher
                    but it does involve a more convoluted selector. Its purpose
                    is to set a max number of children for a switcher. That is,
                    if the switcher has more than{" "}
                    <em>
                        <strong>n</strong>
                    </em>{" "}
                    children it should <strong>always</strong> stack vertically.
                </p>
                <p>
                    We created a custom tailwind plugin which matches a variant
                    for the selector, allowing us to select the maximum number
                    of childre <strong>per stack container</strong> which can be
                    handy. They syntax for the utility class is the following:{" "}
                    <code>{`switcher-max-child-4:basis-full`}</code>
                </p>
                <p>
                    This switcher will automatically switch if it has more than
                    4 children
                </p>
                <div className="switcher switcher-max-child-4:basis-full">
                    <div className="box bg-teal-500/60">A</div>
                    <div className="box bg-teal-500/60">B</div>
                    <div className="box bg-teal-500/60">C</div>
                    <div className="box bg-teal-500/60">D</div>
                    <div className="box bg-red-400">One too many</div>
                </div>
                <hr />
                <p>
                    Additionally we can also target a child of the switcher to
                    grow more than its siblings. To do so give it a{" "}
                    <strong>growth factor</strong> by changing its{" "}
                    <code>{`flex-grow`}</code> property. You can easily add the{" "}
                    <code>{`grow-[]`}</code>
                    <strong>tailwind utility class</strong> to the child you
                    want to grow and specify the growth factor.
                </p>
                <p>
                    <code>{`grow-[8]`}</code> on middle child
                </p>
                <div className="switcher">
                    <div className="box bg-teal-500/60">A</div>
                    <div className="box grow-[8] bg-red-400">B</div>
                    <div className="box bg-teal-500/60">C</div>
                </div>
                <p>
                    <code>{`grow-[5]`}</code> on first child
                </p>
                <div className="switcher">
                    <div className="box grow-[5] bg-red-400">A</div>
                    <div className="box bg-teal-500/60">B</div>
                    <div className="box bg-teal-500/60">C</div>
                </div>
                <p>
                    <code>{`grow-[2]`}</code> on last child
                </p>
                <div className="switcher">
                    <div className="box bg-teal-500/60 ">A</div>
                    <div className="box bg-teal-500/60">B</div>
                    <div className="box grow-[2] bg-red-400 ">C</div>
                </div>
            </div>
        </article>
    );
}
