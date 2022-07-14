export function TheGrid() {
    return (
        <div className="center">
            <div className="stack">
                <h1>The Grid</h1>
                <div className="auto-grid">
                    <div className="box odd:bg-red-500/80 even:bg-teal-600">
                        A
                    </div>
                    <div className="box odd:bg-red-500/80 even:bg-teal-600">
                        B
                    </div>
                    <div className="box odd:bg-red-500/80 even:bg-teal-600">
                        C
                    </div>
                    <div className="box odd:bg-red-500/80 even:bg-teal-600">
                        D
                    </div>
                    <div className="box odd:bg-red-500/80 even:bg-teal-600">
                        E
                    </div>
                    <div className="box odd:bg-red-500/80 even:bg-teal-600">
                        F
                    </div>
                </div>
                <hr />
                <p>
                    Overwrite the minimum width of a grid child by overwriting
                    the
                    <code>--auto-grid-min:</code> custom property value
                </p>
                <p>
                    <code>--auto-grid-min:30ch</code>
                </p>
                <div className="auto-grid gap-2xs [--auto-grid-min:30ch]">
                    <div className="box odd:bg-red-500/80 even:bg-teal-600">
                        A
                    </div>
                    <div className="box odd:bg-red-500/80 even:bg-teal-600">
                        B
                    </div>
                    <div className="box odd:bg-red-500/80 even:bg-teal-600">
                        C
                    </div>
                    <div className="box odd:bg-red-500/80 even:bg-teal-600">
                        D
                    </div>
                    <div className="box odd:bg-red-500/80 even:bg-teal-600">
                        E
                    </div>
                    <div className="box odd:bg-red-500/80 even:bg-teal-600">
                        F
                    </div>
                </div>
                <hr />
                <p>
                    <code>--auto-grid-min:10rem</code>
                </p>
                <div className="auto-grid gap-2xs [--auto-grid-min:10rem]">
                    <div className="box odd:bg-red-500/80 even:bg-teal-600">
                        A
                    </div>
                    <div className="box odd:bg-red-500/80 even:bg-teal-600">
                        B
                    </div>
                    <div className="box odd:bg-red-500/80 even:bg-teal-600">
                        C
                    </div>
                    <div className="box odd:bg-red-500/80 even:bg-teal-600">
                        D
                    </div>
                    <div className="box odd:bg-red-500/80 even:bg-teal-600">
                        E
                    </div>
                    <div className="box odd:bg-red-500/80 even:bg-teal-600">
                        F
                    </div>
                </div>
            </div>
        </div>
    );
}
