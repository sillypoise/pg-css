export function TheSwitcher() {
    return (
        <div className="center">
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
                <hr />
                <p>
                    Given a threshold (default: <code>30rem</code>) the layout
                    will always try to horizontally place the elemnts as long as
                    the container fits that threshold. Once it goes{" "}
                    <em>under</em> the threshold the component will switch to a
                    vertical layout.
                </p>
                <p>
                    Effectively that means that if the width of the container
                    goes below <code>30rem</code>(<code>480px</code>) it's
                    childs will stack vertically and grow as much as they need.
                </p>
                <div className="switcher">
                    <div className="box bg-teal-600">A</div>
                    <div className="box bg-teal-600">B</div>
                    <div className="box bg-teal-600">C</div>
                    <div className="box bg-teal-600">D</div>
                </div>
                <hr />
                <p>
                    This is great but if we have more than <em>4</em> children
                    the <strong>Switcher</strong> should automatically switch to
                    a stack you can see here.
                </p>
                <p>
                    You can change the maximum number of children but only in
                    the custom CSS class we create. If you only want two things
                    side by side <em>ever</em> you would switch it to <em>2</em>
                    .
                </p>
                <div className="switcher switcher-max-child-4:basis-full">
                    <div className="box bg-teal-600">A</div>
                    <div className="box bg-teal-600">B</div>
                    <div className="box bg-teal-600">C</div>
                    <div className="box bg-teal-600">D</div>
                    <div className="box bg-red">One too many</div>
                </div>
                <hr />
                <p>
                    You can add a grow factor of <em>2</em> (or more!) to any
                    block to prioritize it's growth. Just add{" "}
                    <code>grow-[2]</code> to the specific box
                </p>
                <p>
                    <code>grow-[8]</code> on middle child
                </p>
                <div className="switcher">
                    <div className="box bg-teal">A</div>
                    <div className="box bg-red">B</div>
                    <div className="box bg-teal">C</div>
                </div>
                <p>
                    <code>grow-[5]</code> on first child
                </p>
                <div className="switcher">
                    <div className="box grow-[5] bg-red">A</div>
                    <div className="box bg-teal">B</div>
                    <div className="box bg-teal">C</div>
                </div>
                <p>
                    <code>grow-[2]</code> on last child
                </p>
                <div className="switcher">
                    <div className="box bg-teal ">A</div>
                    <div className="box bg-teal">B</div>
                    <div className="box grow-[2] bg-red ">C</div>
                </div>
            </div>
        </div>
    );
}
