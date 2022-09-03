function TheRegion() {
    return (
        <article className="stack">
            <h1>The Region</h1>
            <p>
                Allows us to add consistent vertical padding to create regions
                of content.{" "}
            </p>
            <p>
                We can configure it by setting the <code>--region-gap</code>{" "}
                custom property or overwriting the <code>padding-block</code>{" "}
                property with the <code>plb-[*]</code> utility class
            </p>
            <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur voluptatibus qui natus pariatur velit est dolores
                quidem cumque vero vel, consequatur excepturi beatae officia
                voluptatum. Assumenda exercitationem ab quasi iste pariatur
                repellat omnis! Vero, velit? Cupiditate mollitia eveniet
                accusantium veritatis velit sunt fuga illum ratione alias
                adipisci maxime cum, nobis modi, minima commodi nemo,
                reprehenderit repudiandae? Tempore eveniet porro nisi vero harum
                optio soluta fugit nobis expedita esse. Minus illo
            </p>
            <div className="region [--region-gap:theme(spacing.2xl)] bg-sky-400 max-is-[60ch] rounded-md">
                <p className="text-4 center pli-xl">
                    I want this to feel like a distinct region from the rest of
                    the flowing content. A palm tree because why not? 🌴
                </p>
            </div>
            <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur voluptatibus qui natus pariatur velit est dolores
                quidem cumque vero vel, consequatur excepturi beatae officia
                voluptatum. Assumenda exercitationem ab quasi iste pariatur
                repellat omnis! Vero, velit? Cupiditate mollitia eveniet
                accusantium veritatis velit sunt fuga illum ratione alias
                adipisci maxime cum, nobis modi, minima commodi nemo,
                reprehenderit repudiandae? Tempore eveniet porro nisi vero harum
                optio soluta fugit nobis expedita esse. Minus illo
            </p>
        </article>
    );
}

export { TheRegion };
