import { Link } from "react-router-dom";

export function TheBox() {
    return (
        <article className="center">
            <div className="stack [--stack-gap:theme(spacing.xs)]">
                <h1>The Box</h1>
                <p>
                    This is the basic box primitive. You may see it around this
                    site being used for grouping of elements that <em>need</em>{" "}
                    clear delineation such as:
                </p>
                <ul>
                    <li>A card in one of our layout components</li>
                    <li>
                        A "card" or "note" type element that's among textual{" "}
                        <em>flow</em> content. (E.g. The card below!)
                    </li>
                    <li>An inner wrapper of a positioned dialog element</li>
                    <li>And other uses of content demarcation</li>
                </ul>
                <div className="box">I am a Box primitive!</div>

                <p>
                    The point is that a <strong>Box</strong> really{" "}
                    <em>is not</em> a layout primitive. But instead it's more a
                    plain classic component that is <em>frequently</em> used
                    inside layout components.
                </p>
                <p>
                    <em>In fact</em> it can be considered as the main primitive
                    for building your components (i.e. cards, buttons, etc.)
                </p>
                <p>
                    There are some <em>key rules</em> when it comes to styling
                    our <strong>Box</strong> primitive:
                </p>
                <ul>
                    <li>
                        It must always be obvious this is a box. Either through
                        explicit <em>borders</em> or through a visually clear{" "}
                        <em>background color</em>
                    </li>
                    <li>
                        Boxes <em>do not</em> deal with <em>margins</em> as they
                        are <em>not</em> layout components. They only deal with{" "}
                        <em>padding</em> and on <em>very rarely</em> occasions
                        aesthetic properties
                    </li>
                    <li>
                        Must <em>always</em> be a box. That means that if it has{" "}
                        <em>borders</em> or <em>padding</em> it must be applied{" "}
                        <em>equally</em> on all sides
                    </li>
                </ul>
                <hr />
                <p>
                    Let's see some examples of <em>Box</em> usage
                </p>
                <p>
                    Here we have an outer box overwriteen with no background
                    color, a border and no padding. Inside that box we have two
                    boxes overwritten with no background color and a border
                </p>
                <p>It creates a nice card element</p>
                <div className="box">
                    <div className="box">Head</div>
                    <div className="box">
                        Body content. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Facere, esse repellendus placeat
                        accusantium incidunt vero libero tenetur, accusamus
                        voluptate fugit sequi architecto, molestias in
                        quibusdam.
                    </div>
                </div>
                <p>
                    Let's repeat the same card layou but use one of our{" "}
                    <em>Layout Primitives</em>, let's use a{" "}
                    <Link to="/home/the-sidebar">Sidebar</Link> layout
                    component!
                </p>
                <div className="sidebar box gap-[0] p-[0]">
                    <div className="box">Head</div>
                    <div className="box">
                        Body content. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Facere, esse repellendus placeat
                        accusantium incidunt vero libero tenetur, accusamus
                        voluptate fugit sequi architecto, molestias in
                        quibusdam.
                    </div>
                </div>
                <p>
                    We use the box primitive inside all the other layout
                    components
                </p>
            </div>
        </article>
    );
}
