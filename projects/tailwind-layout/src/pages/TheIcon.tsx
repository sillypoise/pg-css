export function TheIcon() {
    return (
        <div className="stack">
            <h1>The Icon</h1>
            <p>For icons duh...</p>
            <div className="box">
                <p>
                    <span className="with-icon">
                        <svg
                            viewBox="0 0 10 10"
                            className="icon"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path d="M1,1 9,9 M9,1 1,9" />
                        </svg>
                    </span>
                    A basic container with our fonts having the regular body
                    size
                </p>
            </div>
            <p>
                What if we place it inside a container that has larger font
                size?
            </p>
            <div className="box">
                <p className="text-3 text-red-600">
                    <span className="with-icon" aria-label="close">
                        <svg
                            viewBox="0 0 10 10"
                            className="icon"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path d="M1,1 9,9 M9,1 1,9" />
                        </svg>
                    </span>
                    Let's make this text a little bigger in size
                </p>
            </div>
            <p>
                We use the &nbsp; <code>.with-icon</code> class when we want our
                icon to eliminate the word space and employ margin instead{" "}
            </p>
        </div>
    );
}
