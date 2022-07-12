export function TheGrid() {
    return (
        <div className="center">
            <div className="stack">
                <h1>The Grid</h1>
                <div className="auto-grid">
                    <div className="box bg-red">A</div>
                    <div className="box bg-teal">B</div>
                    <div className="box bg-red">C</div>
                    <div className="box bg-teal">D</div>
                    <div className="box bg-red">E</div>
                    <div className="box bg-teal">F</div>
                </div>
                <hr />
                <p>
                    Overwrite the minimum width of a grid child by overwriting
                    the
                    <code>--grid-item-min-width:</code> custom property value
                </p>
                <p>
                    <code>--grid-item-min-width:20ch</code>
                </p>
                <div
                    className="auto-grid gap-2xs []"
                    // style="--grid-item-min-width: 20ch;"
                >
                    <div className="box bg-red">A</div>
                    <div className="box bg-teal">B</div>
                    <div className="box bg-red">C</div>
                    <div className="box bg-teal">D</div>
                    <div className="box bg-red">E</div>
                    <div className="box bg-teal">F</div>
                </div>
                <hr />
                <p>
                    <code>--grid-item-min-width:10rem</code>
                </p>
                <div className="auto-grid gap-2xs [--grid-item-min-width:10rem]">
                    <div className="box bg-red">A</div>
                    <div className="box bg-teal">B</div>
                    <div className="box bg-red">C</div>
                    <div className="box bg-teal">D</div>
                    <div className="box bg-red">E</div>
                    <div className="box bg-teal">F</div>
                </div>
            </div>
        </div>
    );
}
