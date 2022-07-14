export function TheCover() {
    return (
        <div className="center">
            <div className="stack">
                <h1>The Cover</h1>
                <p>
                    Center content <em>vertically</em> and accomodate a{" "}
                    <em>top</em> and <em>bottom</em> element that will be pushed
                    to the edges.
                </p>
                <div className="cover first-letter:| debug">
                    <div className="box | bg-teal-600">HEADER</div>
                    <h1 className="cover-target | box  bg-red-500/80">
                        I AM THE CONTENT YOU WANT FRONT AND CENTER!!!
                    </h1>
                    <div className="box | bg-teal-600">FOOTER</div>
                </div>
                <hr />
                <div className="cover min-bs-[40rem] | debug">
                    <h1 className="cover-target | box bg-red-500/80">
                        I AM THE CONTENT YOU WANT FRONT AND CENTER!!!
                    </h1>
                    <div className="box | bg-teal-600">FOOTER</div>
                </div>
                <hr />
                <div className="cover min-bs-[40rem] | debug">
                    <div className="box marker: | bg-teal-600">HEADER</div>
                    <h1 className="cover-target | box bg-red-500/80">
                        I AM THE CONTENT YOU WANT FRONT AND CENTER!!!
                    </h1>
                </div>
                <div className="flex flex-col p-[0] min-bs-[50rem] | debug">
                    <div className="mbe-m | box | bg-teal-600">HEADER</div>
                    <h1 className=" mlb-auto self-center | box bg-red-500/80">
                        I AM THE CONTENT YOU WANT FRONT AND CENTER!!!
                    </h1>
                    <div className="mbs-m | box | bg-teal-600">FOOTER</div>
                </div>
            </div>
        </div>
    );
}
