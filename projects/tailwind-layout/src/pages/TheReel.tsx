export function TheReel() {
    return (
        <div className="stack">
            <h1>The Reel</h1>
            <p>
                The Reel is a robust and efficient antidote to carousel/slider
                components.It is ideal for browsing categories of things:
                movies; products; news stories; photographs.
            </p>
            <div className="reel gap-s">
                <div className="box p-3xl">A</div>
                <div className="box p-3xl">B</div>
                <div className="box p-3xl">C</div>
                <div className="box p-3xl">D</div>
                <div className="box p-3xl">E</div>
                <div className="box p-3xl">F</div>
            </div>
            <p>
                We can adjust the min width of a reel item with the &nbsp;
                <code>[--reel-item-width]</code> &nbsp; custom property. E.g.
                E.g.&nbsp;(
                <code>[--reel-item-width[40ch]]</code>)
            </p>
            <div className="reel [--reel-item-width:40ch] gap-s">
                <div className="box p-3xl">A</div>
                <div className="box p-3xl">B</div>
                <div className="box p-3xl">C</div>
                <div className="box p-3xl">D</div>
                <div className="box p-3xl">E</div>
                <div className="box p-3xl">F</div>
            </div>
        </div>
    );
}
