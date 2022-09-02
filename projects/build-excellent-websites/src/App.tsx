import "./styles/tailwind.css";

function App() {
    return (
        <main className="stack">
            <header>
                <div>
                    <div className="stack">
                        <h1>Be the browser’s mentor, not its micromanager!</h1>
                        <p>
                            Give the browser some solid rules and hints, then
                            let it make the right decisions for the people that
                            visit it, based on their device, connection quality
                            and capabilities. This is how they will get a
                            genuinely great user experience, rather than a
                            fragmented, broken one.
                        </p>
                    </div>
                </div>
                <svg
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="m0 96 80-5.3C160 85 320 75 480 64s320-21 480-21.3c160 .3 320 10.3 400 16l80 5.3V0H0v96Z"></path>
                </svg>
            </header>
            <article>
                <div className="stack">
                    <h2>Key Foundations &amp; Principles</h2>
                    <ul className="stack" role="list">
                        <li className="stack">
                            <h3>Modern CSS with Methodologies</h3>
                            <p>
                                Instead of brute-forcing your designs together
                                with a CSS framework, consider opting for a CSS
                                methodology like{" "}
                                <a href="https://cube.fyi/">CUBE CSS</a>,{" "}
                                <a href="http://smacss.com/">SMACSS</a> or{" "}
                                <a href="http://getbem.com/introduction/">
                                    BEM
                                </a>{" "}
                                that empowers you to write flexible, portable
                                CSS, rather than rigid, inflexible and
                                overly-specific CSS.
                            </p>
                        </li>
                        <li className="stack">
                            <h3>Fluid type &amp; Space</h3>
                            <p>
                                Creating type scales that respond to the
                                viewport, rather than setting explicit values
                                for typography and space allows you to set rules
                                once and forget about them, knowing that
                                whatever device, regardless of its available
                                size will be presented with appropriate sizes.
                            </p>
                        </li>
                        <li className="stack">
                            <h3>Flexible Layouts</h3>
                            <p>
                                Using flexible, flexbox-based layouts, like the
                                ones we provide in{" "}
                                <a href="https://every-layout.dev/">
                                    Every Layout
                                </a>
                                , ensures that regardless of conditions—be it
                                content or available screen size: your front-end
                                will be able to respond in the most appropriate
                                way. Giving browsers hints and space to do what
                                they do best, helps your front-end handle tricky
                                scenarios where breakpoint-based layouts
                                consistently fail.
                            </p>
                        </li>
                        <li className="stack">
                            <h3>Progressive Enhancement</h3>
                            <p>
                                Building up with the lowest possible
                                technological solution and enhancing it where
                                device capability, connection speeds and context
                                conditions allow, helps you build for everyone,
                                not just the minority of people that have fast
                                connections and powerful devices that work well,
                                all the time.
                            </p>
                            <p>
                                Doing the opposite: building the best
                                experience, then hacking it down for a handful
                                of selected edge-cases means you’re almost
                                certainly going to build an experience that’s
                                excludes a lot of people.
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <svg
                        preserveAspectRatio="none"
                        viewBox="0 0 1440 96"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m0 96 80-5.3C160 85 320 75 480 64s320-21 480-21.3c160 .3 320 10.3 400 16l80 5.3V0H0v96Z"></path>
                    </svg>
                    <div>
                        <blockquote>
                            <p>
                                Stick to those principles and making excellent
                                websites that work for everyone suddenly becomes
                                much, much easier.
                            </p>
                        </blockquote>
                    </div>
                    <svg
                        preserveAspectRatio="none"
                        viewBox="0 0 1440 96"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m0 96 80-5.3C160 85 320 75 480 64s320-21 480-21.3c160 .3 320 10.3 400 16l80 5.3V0H0v96Z"></path>
                    </svg>
                </div>
            </article>
            <article className="stack">
                <div className="stack">
                    <h2>Why though?</h2>
                    <p>
                        It was in 2010 when{" "}
                        <a href="https://twitter.com/beep">Ethan Marcotte</a>{" "}
                        published the legendary{" "}
                        <a href="https://alistapart.com/article/responsive-web-design/">
                            Responsive Web Design
                        </a>{" "}
                        article. It completely changed how we built websites for
                        an ever-growing variety of device types and sizes.
                    </p>
                    <p>
                        The article has aged really well, but the practice of
                        web design has not. Oftentimes, designers and developers
                        get stuck into pixel-pushing a design into shape with
                        rigid methods to ensure it looks exactly like that
                        Figma, Sketch or even Photoshop design. This attitude
                        has stuck around for a long time though, even as far
                        back as the very early days of the web, which{" "}
                        <a href="https://twitter.com/adactio">Jeremy Keith</a>{" "}
                        touched on in{" "}
                        <a href="https://resilientwebdesign.com/">
                            Resilient Web Design
                        </a>
                        :
                    </p>
                    <blockquote>
                        <p>
                            It was as though the web design community were
                            participating in a shared consensual hallucination.
                            Rather than acknowledge the flexible nature of the
                            browser window, they chose to settle on one set
                            width as the ideal …even if that meant changing the
                            ideal every few years.
                        </p>
                        <p>Jeremy Keith - Resilient Web Design</p>
                    </blockquote>
                    <p>
                        We absolutely <strong>don’t know</strong> what our
                        audience device sizes are going to be or whether or not
                        they have a decent connection speed, fully working
                        browser or even a bright enough screen to present our
                        designs how{" "}
                        <strong>we want them to be presented</strong>. We are
                        all guilty of micromanaging the browser in some aspects,
                        and in turn, are creating an inflexible and fragile user
                        experience.
                    </p>
                    <p>
                        A better way to approach this is to{" "}
                        <strong>be the browser’s mentor</strong> by setting some
                        base rules and hints, then getting out of its way to let
                        it make decisions based on the challenges it will{" "}
                        <strong>undoubtedly face</strong>. Even looking at{" "}
                        <a href="https://www.opensignal.com/sites/opensignal-com/files/data/reports/global/data-2015-08/2015_08_fragmentation_report.pdf">
                            this 2015 report on Android device sizes
                        </a>{" "}
                        tells us just how fragmented devices are. This was also
                        conducted <strong>7 years ago</strong> and at the time
                        of writing, it’s <strong>2022</strong>. That’s a long
                        time for even more fragmentation to occur. Now factor in
                        all of the other brands and types of device and you can
                        really see how problematic it is, building websites in a
                        rigid, specific manner.
                    </p>
                    <p>
                        It makes sense to lose a bit of{" "}
                        <strong>perceived control</strong> and instead, get even{" "}
                        <strong>greater control</strong> by being the browser’s
                        mentor and not its micromanger, right?
                    </p>
                    <p>
                        Go ahead and open up this website on multiple devices or
                        just resize the browser window. You’ll see it deals with
                        anything that is thrown at it. It also uses progressive
                        enhancement to leverage modern CSS, while providing a
                        solid, base experience for browsers that don’t yet
                        support those features, thanks to the usage of semantic
                        HTML. All in, it’s around 2kb of CSS{" "}
                        <strong>in total</strong>.
                    </p>
                </div>
            </article>
            <article className="stack">
                <svg
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="m0 96 80-5.3C160 85 320 75 480 64s320-21 480-21.3c160 .3 320 10.3 400 16l80 5.3V0H0v96Z"></path>
                </svg>
                <div className="stack">
                    <div className="stack">
                        <h2>Tools of the trade</h2>
                        <p>
                            Tools are just tools. They don’t really
                            matter—especially to the people trying to use the
                            websites you build. The same goes for frameworks
                            too. The most important thing is that you stick to
                            the key principles. Even so, here are some useful
                            tools I use together to build flexible front-ends.
                        </p>
                        <ul role="list" className="stack">
                            <li className="stack">
                                <div aria-hidden="true">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        viewBox="0 0 120 139"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#a)">
                                            <path
                                                d="m2.932 101.287 56.338 34.42 58.252-33.307L59.27 69.092 2.932 101.287Z"
                                                fill="#DBDBDB"
                                                fill-opacity=".2"
                                                data-darkreader-inline-fill=""
                                            ></path>
                                            <path
                                                d="M59.27 2.475v66.618l58.252 33.307V35.782L59.27 2.475ZM59.27 2.475v66.618L2.932 101.287V35.782L59.27 2.475Z"
                                                fill="#F3F3F3"
                                                fill-opacity=".3"
                                                data-darkreader-inline-fill=""
                                            ></path>
                                            <path
                                                d="M117.522 38.26c-.432 0-.856-.113-1.231-.328l-57.01-32.6-55.557 32.26A2.479 2.479 0 0 1 .082 34.82a2.475 2.475 0 0 1 1.15-1.507L58.026.337a2.474 2.474 0 0 1 2.474 0l58.244 33.299a2.474 2.474 0 0 1-1.231 4.624h.008Z"
                                                fill="#fff"
                                                data-darkreader-inline-fill=""
                                            ></path>
                                            <path
                                                d="M56.792 4.949V2.474A2.473 2.473 0 0 1 59.27 0a2.479 2.479 0 0 1 2.477 2.474V4.95M59.27 29.19a2.482 2.482 0 0 1-2.478-2.474v-3.629a2.473 2.473 0 0 1 2.478-2.474 2.479 2.479 0 0 1 2.477 2.474v3.629a2.473 2.473 0 0 1-2.477 2.474Zm0-10.885a2.48 2.48 0 0 1-2.478-2.474v-3.626a2.473 2.473 0 0 1 2.478-2.474 2.48 2.48 0 0 1 2.477 2.474v3.626a2.473 2.473 0 0 1-2.477 2.474ZM59.27 61.836a2.48 2.48 0 0 1-2.478-2.475v-3.625a2.472 2.472 0 0 1 2.478-2.475 2.479 2.479 0 0 1 2.477 2.475v3.625a2.473 2.473 0 0 1-2.477 2.475Zm0-10.882a2.479 2.479 0 0 1-2.478-2.475v-3.628a2.472 2.472 0 0 1 2.478-2.474 2.479 2.479 0 0 1 2.477 2.474v3.628a2.473 2.473 0 0 1-2.477 2.475Zm0-10.882a2.479 2.479 0 0 1-2.478-2.475V33.97a2.472 2.472 0 0 1 2.478-2.474 2.479 2.479 0 0 1 2.477 2.474v3.628a2.472 2.472 0 0 1-1.529 2.286 2.48 2.48 0 0 1-.948.189ZM59.27 71.567a2.48 2.48 0 0 1-2.478-2.474v-2.475a2.473 2.473 0 0 1 2.478-2.474 2.48 2.48 0 0 1 2.477 2.474v2.475a2.473 2.473 0 0 1-2.477 2.474ZM117.522 104.874a2.476 2.476 0 0 1-2.477-2.474V35.782a2.476 2.476 0 0 1 4.229-1.75c.465.464.726 1.094.726 1.75V102.4a2.473 2.473 0 0 1-2.478 2.474ZM2.478 104.543A2.479 2.479 0 0 1 0 102.069V35.454a2.473 2.473 0 0 1 2.478-2.474 2.479 2.479 0 0 1 2.477 2.474v66.615a2.474 2.474 0 0 1-2.477 2.474Z"
                                                fill="#fff"
                                                data-darkreader-inline-fill=""
                                            ></path>
                                            <path
                                                d="m116.602 99.682 2.152 1.23a2.475 2.475 0 0 1-2.46 4.296l-2.152-1.23M109.023 100.675a2.509 2.509 0 0 1-1.229-.325l-3.172-1.816a2.468 2.468 0 0 1-1.16-1.499 2.466 2.466 0 0 1 .876-2.607 2.475 2.475 0 0 1 2.747-.19l3.172 1.816a2.473 2.473 0 0 1-1.234 4.621Zm-9.52-5.444c-.431 0-.855-.112-1.229-.325L95.1 93.09a2.475 2.475 0 1 1 2.463-4.296l3.175 1.816a2.473 2.473 0 0 1-1.234 4.621ZM89.982 89.787c-.432 0-.856-.113-1.231-.328l-3.172-1.813a2.476 2.476 0 0 1-.92-3.378 2.478 2.478 0 0 1 3.382-.918l3.173 1.816a2.475 2.475 0 0 1-1.232 4.62Zm-9.523-5.45c-.43 0-.854-.113-1.228-.328l-3.173-1.813a2.48 2.48 0 0 1-1.23-2.462 2.475 2.475 0 0 1 1.807-2.078 2.483 2.483 0 0 1 1.883.239l3.176 1.815a2.476 2.476 0 0 1 1.171 2.79 2.474 2.474 0 0 1-2.406 1.837ZM70.954 78.9c-.431 0-.855-.112-1.229-.328l-3.175-1.815a2.476 2.476 0 0 1-.965-3.404 2.475 2.475 0 0 1 3.428-.89l3.172 1.816a2.476 2.476 0 0 1 1.162 2.783 2.474 2.474 0 0 1-2.393 1.838ZM38.6 84.232a2.479 2.479 0 0 1-2.398-1.829 2.472 2.472 0 0 1 1.148-2.786l3.09-1.792a2.478 2.478 0 0 1 3.67 2.772 2.474 2.474 0 0 1-1.18 1.506l-3.087 1.792c-.378.22-.807.337-1.244.337Zm9.264-5.382a2.48 2.48 0 0 1-2.39-1.83 2.472 2.472 0 0 1 1.145-2.783l3.087-1.795a2.48 2.48 0 0 1 3.744 1.801 2.471 2.471 0 0 1-1.26 2.48l-3.088 1.796c-.377.216-.803.33-1.237.33ZM10.799 100.373a2.48 2.48 0 0 1-2.396-1.83 2.472 2.472 0 0 1 1.15-2.785l3.087-1.795a2.48 2.48 0 0 1 3.701 1.808 2.474 2.474 0 0 1-1.21 2.47l-3.09 1.796a2.478 2.478 0 0 1-1.242.336Zm9.268-5.379a2.483 2.483 0 0 1-2.39-1.83 2.475 2.475 0 0 1 1.14-2.785l3.09-1.792a2.481 2.481 0 0 1 3.423.875 2.473 2.473 0 0 1-.933 3.403l-3.087 1.792c-.377.22-.807.337-1.243.337Zm9.253-5.385a2.48 2.48 0 0 1-2.39-1.83 2.472 2.472 0 0 1 1.144-2.782L31.16 83.2a2.48 2.48 0 0 1 3.388.895 2.473 2.473 0 0 1-.896 3.384l-3.09 1.795a2.482 2.482 0 0 1-1.243.334ZM5.864 103.627l-2.14 1.241a2.48 2.48 0 0 1-3.702-1.808 2.474 2.474 0 0 1 1.21-2.47l2.143-1.242"
                                                fill="#fff"
                                                data-darkreader-inline-fill=""
                                            ></path>
                                            <path
                                                d="M59.27 138.182c-.445 0-.881-.119-1.264-.346L1.214 104.198a2.467 2.467 0 0 1-1.183-1.517 2.472 2.472 0 0 1 1.81-3.048 2.48 2.48 0 0 1 1.9.31l55.552 32.901 56.998-32.591a2.488 2.488 0 0 1 1.933-.33 2.476 2.476 0 0 1 1.309 4.003 2.497 2.497 0 0 1-.788.618l-58.244 33.313c-.375.213-.8.325-1.231.325Z"
                                                fill="#fff"
                                                data-darkreader-inline-fill=""
                                            ></path>
                                            <path
                                                d="M59.27 138.182a2.48 2.48 0 0 1-2.478-2.475V69.092a2.473 2.473 0 0 1 2.478-2.474 2.48 2.48 0 0 1 2.477 2.474v66.615a2.474 2.474 0 0 1-2.477 2.475Z"
                                                fill="#fff"
                                                data-darkreader-inline-fill=""
                                            ></path>
                                            <path
                                                d="M59.273 71.567a2.48 2.48 0 0 1-2.383-1.844 2.472 2.472 0 0 1 1.163-2.777l58.238-33.31a2.48 2.48 0 0 1 3.623 2.796 2.476 2.476 0 0 1-1.16 1.5L60.501 71.238a2.462 2.462 0 0 1-1.228.328Z"
                                                fill="#fff"
                                                data-darkreader-inline-fill=""
                                            ></path>
                                            <path
                                                d="M59.267 71.567a2.48 2.48 0 0 1-1.26-.346L1.213 37.583a2.477 2.477 0 0 1-.868-3.391 2.475 2.475 0 0 1 2.483-1.188c.322.046.632.155.912.321l56.793 33.638a2.475 2.475 0 0 1-1.267 4.604Z"
                                                fill="#fff"
                                                data-darkreader-inline-fill=""
                                            ></path>
                                        </g>
                                        <defs>
                                            <clipPath id="a">
                                                <path
                                                    fill="#fff"
                                                    d="M0 0h120v138.182H0z"
                                                    data-darkreader-inline-fill=""
                                                ></path>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <h3>
                                    <a href="https://cube.fyi/">CUBE CSS</a>
                                </h3>
                                <p>
                                    A CSS methodology that’s orientated towards
                                    simplicity, pragmatism and consistency.
                                </p>
                            </li>
                            <li className="stack">
                                <div aria-hidden="true">
                                    <svg
                                        viewBox="0 0 254 254"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#utopia)">
                                            <path
                                                d="M69.464 59.675c11.848.595 18.407.638 28.963.364 20.595-.589 22.419-.535 24.923.595 2.28 1.072 4.007 3.183 4.007 5.053 0 3.05-2.414 4.914-11.387 8.783-6.436 2.781-8.249 4.287-9.069 7.379-.317 1.41-.499 8.874-.499 23.626 0 24.113.536 38.373 1.641 44.063 1.502 8.011 4.42 15.16 7.745 19.071 1.958 2.278 8.335 5.557 13.623 6.967 4.784 1.275 15.629 1.409 20.456.182 9.751-2.369 15.554-8.242 18.638-18.937 2.183-7.502 3.003-17.893 3.368-42.789.365-25.356-.225-30.822-3.824-35.007-1.55-1.822-3.143-2.733-12.803-7.148-4.859-2.16-7.095-5.782-5.223-8.333 2.547-3.413 7.562-4.458 17.86-3.751 9.041.695 18.124.634 27.155-.182 11.708-1.136 15.553-.777 18.316 1.774 3.915 3.595.59 8.922-7.38 11.928-12.031 4.506-13.125 5.825-13.672 17.024-1.55 31.615-3.556 54.309-5.696 64.597-4.51 21.531-15.307 34.595-33.714 40.726-17.27 5.733-36.042 5.733-54.219 0-8.753-2.733-14.583-6.19-20.686-12.154-11.44-11.199-14.766-22.988-15.554-55.402-.67-28.958-1.218-44.074-1.625-46.062-.773-3.339-3.283-5.246-10.545-8.118-3.325-1.27-6.79-2.91-7.793-3.639-4.553-3.322-4.602-7.282-.09-9.608 3.893-2.004 5.078-2.047 27.084-1.002Z"
                                                fill="currentColor"
                                                data-darkreader-inline-fill=""
                                            ></path>
                                        </g>
                                        <defs>
                                            <clipPath id="utopia">
                                                <path
                                                    fill="currentColor"
                                                    transform="translate(39 59)"
                                                    d="M0 0h176v141H0z"
                                                    data-darkreader-inline-fill=""
                                                ></path>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <h3>
                                    <a href="https://utopia.fyi/">Utopia</a>
                                </h3>
                                <p>
                                    A handy collection of generators and tools
                                    that let you build up various fluid type and
                                    space scales depending on viewport sizes to
                                    help with responsive design.
                                </p>
                            </li>
                            <li className="stack">
                                <div aria-hidden="true">
                                    <svg
                                        viewBox="0 0 154 112"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            clip-path="url(#clip666)"
                                            fill="currentColor"
                                            data-darkreader-inline-fill=""
                                        >
                                            <path d="M0 0v93.645h13.11l.263-68.66 16.107-.3V12.96l101.624-.3V0H0Z"></path>
                                            <path d="M29.517 12.286c-.262 1.311-.674 5.769.6 2.473.374-2.136 2.921-2.735-.6-2.473Zm5.094 0c-2.06 2.772-3.37 5.806-5.131 8.69-.487 2.51-.225 4.758 1.386 1.274 1.16-2.997 3.146-5.581 4.607-8.39 1.648-1.574.524-1.686-.862-1.574Zm4.645 0c-1.61 2.997-3.146 5.806-4.907 8.69-1.685 1.986-2.622 5.77.375 2.885 1.236-2.51 2.884-5.132 4.382-7.604.15-2.023 4.495-4.682.15-3.97Zm5.17 0c-1.649 2.622-2.997 5.619-5.02 8.129-.487 1.685-3.596 5.394-.187 4.195 1.273-2.51 2.884-5.17 4.382-7.604-.075-1.498 4.72-5.357.825-4.72Zm4.682 0c-1.05 2.81-3.072 5.244-4.27 7.941-.9 1.499-4.495 5.881-.488 4.27 1.124-3.146 3.447-5.805 4.983-8.765.187-1.872 4.045-4.12-.225-3.446Zm5.132 0c-1.574 2.622-2.997 5.282-4.533 7.941-.374 1.798-4.795 5.432-.75 4.57 1.949-2.81 2.998-5.88 5.133-8.54-.15-2.06 4.495-4.645.15-3.97Zm5.094 0c-2.06 2.772-3.371 5.806-5.132 8.69-1.648 1.948-3.072 5.807.525 2.773 1.048-2.847 3.109-5.282 4.345-8.017.3-1.498 3.933-4.008.262-3.446Zm4.682 0c-1.199 3.072-3.446 5.731-4.944 8.69-1.686 1.986-2.623 5.77.374 2.885 1.274-2.51 2.885-5.17 4.383-7.604.15-2.023 4.495-4.682.187-3.97Zm5.132 0c-1.423 2.36-2.884 5.057-4.345 7.38-.487 1.685-4.645 6.143-.862 4.944 1.498-2.772 3.034-5.694 5.02-8.353.075-1.499 3.708-4.645.187-3.97Zm4.682 0c-1.049 2.81-3.071 5.244-4.27 7.941-.862 1.499-4.495 5.881-.487 4.27 1.61-3.034 3.184-5.843 4.982-8.765.187-1.872 4.045-4.12-.225-3.446Zm5.132 0c-1.424 2.997-3.559 5.694-4.907 8.69-1.76 1.686-3.11 5.62-.187 3.184 2.022-2.659 3.296-5.618 5.056-8.428.3-1.872 4.046-4.082.038-3.446Zm5.132 0c-1.836 2.622-3.184 5.619-5.057 8.166-1.124 2.135-3.671 6.443.374 3.296 1.087-2.846 3.147-5.281 4.383-8.016.262-1.46 3.896-4.008.3-3.446Zm4.645 0c-1.237 2.922-3.147 5.507-4.57 8.316-1.873 1.91-3.26 6.293 0 3.259 1.498-2.772 3.034-5.694 5.019-8.353.337-1.948 3.296-3.821-.45-3.222Zm5.131 0c-1.423 2.36-2.884 5.057-4.345 7.38-.225 1.872-5.057 5.993-.899 5.131 1.424-2.66 2.997-5.281 4.495-7.94.375-1.312 4.383-5.432.75-4.57Zm5.17 0c-1.986 2.772-3.634 5.731-5.132 8.616-1.986 1.498-2.885 5.768 0 3.146 1.948-2.81 2.996-5.88 5.132-8.54-.225-1.611 3.558-3.858 0-3.222Zm4.644 0c-1.423 2.997-3.558 5.694-4.907 8.69-1.76 1.686-3.109 5.62-.187 3.184 2.023-2.659 3.296-5.618 5.057-8.428.3-1.872 4.045-4.082.037-3.446Zm5.132 0c-1.985 2.547-2.922 5.619-4.982 8.129-1.236 2.097-3.746 6.517.337 3.37 1.199-2.996 3.109-5.618 4.72-8.427.524-1.274 3.109-3.671-.075-3.072Zm4.645 0c-1.236 2.922-3.147 5.507-4.57 8.316-1.236 1.423-3.521 5.806-.15 3.746 1.386-2.847 3.147-5.47 4.645-8.241.562-1.798 4.083-4.607.075-3.82Zm5.244 0c-1.611 2.585-3.259 5.244-4.57 7.867-.861 1.61-4.495 5.843-.749 4.495 1.798-2.735 2.997-5.77 5.019-8.391 0-1.424 3.671-4.608.263-3.97h.037Zm5.057 0c-1.985 2.772-3.633 5.731-5.132 8.616-1.985 1.498-2.884 5.768 0 3.146 1.948-2.81 2.997-5.88 5.132-8.54-.225-1.611 3.558-3.858 0-3.222Zm4.645 0c-1.611 2.997-3.147 5.806-4.907 8.69-1.761 1.686-3.109 5.62-.188 3.184 2.023-2.622 3.222-5.618 5.057-8.353.637-1.873 4.008-4.195.038-3.52Zm5.132 0c-1.986 2.547-2.922 5.619-4.982 8.129-1.087 1.798-3.259 6.48.337 3.37 1.386-2.958 3.184-5.618 4.719-8.427.562-1.236 2.997-3.746-.074-3.072Zm4.719 0c-1.386 2.885-3.146 5.507-4.645 8.316-1.236 1.423-3.521 5.806-.149 3.746 1.386-2.847 3.146-5.47 4.644-8.241.525-1.723 4.083-4.607.15-3.82Zm5.132 0c-1.573 2.585-3.221 5.244-4.532 7.867-.75 1.648-4.608 5.693-.75 4.57 1.724-2.81 2.997-5.807 5.02-8.466 0-1.424 3.671-4.608.262-3.97Zm5.094 0c-2.06 2.735-3.296 5.806-5.131 8.616-1.349 2.547-3.596 4.645-3.334 7.791-.113 2.997 2.547-3.67 3.334-4.645 1.947-2.772 2.996-5.88 5.131-8.54 0-1.574 3.596-3.746 0-3.222Zm4.645 0c-1.611 2.997-3.146 5.806-4.907 8.69-1.386 2.997-3.596 5.694-4.982 8.766-1.124 2.285-3.558 4.345-3.221 7.23.412 2.172 3.034-4.234 4.083-5.507 1.723-2.81 2.996-5.806 5.019-8.466 1.124-2.921 3.446-5.244 4.308-8.278-.225-.6.412-2.36-.3-2.435Zm.3 7.979c-1.311 2.997-3.184 5.694-4.87 8.578-1.423 2.81-3.371 5.394-4.57 8.39-1.535 2.473-3.596 4.795-3.97 7.754-.525 4.683 1.685-1.61 2.659-2.846 2.135-2.623 3.184-5.732 5.17-8.541 1.273-2.51 2.884-5.17 4.382-7.604 1.311-1.873 1.311-3.484 1.199-5.731Zm0 8.952c-1.498 2.997-3.821 5.62-4.945 8.766-2.097 2.66-3.184 5.73-5.131 8.54-.824 2.472-3.559 4.495-3.334 7.38.337 3.37 2.36-3.934 3.858-4.683 1.386-2.922 3.184-5.581 4.72-8.39 1.461-2.847 3.371-5.432 4.57-8.391.562-.824.112-2.248.262-3.222Zm0 8.241c-1.498 2.997-3.296 5.731-4.87 8.616-1.498 2.809-3.296 5.468-4.682 8.39-1.498 2.472-3.596 4.72-3.858 7.604-.562 4.757 1.648-1.273 2.659-2.697 1.723-2.734 3.372-5.693 5.17-8.54 1.273-2.51 2.884-5.17 4.382-7.604 1.311-1.873 1.311-3.484 1.199-5.731v-.038Zm0 8.99c-1.873 2.622-3.184 5.507-4.87 8.24-1.573 2.81-3.259 5.77-5.132 8.466-.599 2.772-3.558 4.645-3.371 7.68-.112 4.045 2.248-2.81 3.297-3.784 1.46-2.847 3.371-5.431 4.569-8.39 1.873-2.697 3.559-5.62 5.17-8.466.562-1.124.262-2.435.337-3.746Zm0 8.24c-1.199 2.773-3.296 5.17-4.308 8.017-1.985 2.622-3.558 5.581-5.019 8.353-1.386 2.697-3.521 5.02-4.083 7.941-.6 4.87 1.573-.674 2.659-2.397 1.499-2.397 3.147-5.094 4.42-7.604 1.948-2.772 2.997-5.881 5.132-8.54 1.311-1.761 1.311-3.559 1.199-5.77Zm0 8.99c-1.873 2.623-3.109 5.507-4.87 8.13-1.91 2.809-2.996 5.88-5.132 8.577-.599 2.847-3.745 4.72-3.371 7.904-.299 3.82 2.173-2.997 3.184-3.858 1.386-3.072 3.596-5.769 4.982-8.766 1.761-2.921 3.371-5.73 4.945-8.802.562-.75.112-2.173.262-3.147v-.037Zm0 8.242c-1.761 2.959-3.371 5.73-4.945 8.765-1.498 2.435-3.109 5.094-4.382 7.604-1.236 2.847-4.196 5.057-4.083 8.316 1.311 1.648 2.847-3.933 4.083-5.245 1.573-2.809 3.259-5.73 5.132-8.428.936-2.996 3.371-5.244 4.195-8.278V71.92Zm0 8.24c-1.161 2.922-3.184 5.432-4.495 8.241-1.761 2.922-3.371 5.731-4.982 8.803 2.959.412 3.484-3.67 4.869-5.619 1.761-2.622 3.484-5.356 4.608-8.278V80.16Zm0 8.99c-1.498 2.585-3.559 5.956-4.495 8.054 2.847.375 3.858-3.708 4.495-5.918V89.15ZM42.552 39.855a.613.613 0 0 1-.187.45.607.607 0 0 1-.374.112h-9.777c-.15 0-.225.088-.225.263v7.416c0 .15.075.225.225.225h5.619c.175 0 .3.063.374.187.15.1.225.225.225.375v4.57c0 .15-.062.287-.187.412-.1.1-.225.15-.375.15h-5.656c-.175 0-.262.075-.262.224v7.492c0 .15.075.225.224.225h9.815c.15 0 .274.062.374.187.125.075.187.2.187.375v4.532c0 .15-.062.3-.187.45a.607.607 0 0 1-.374.112H25.884a.786.786 0 0 1-.413-.112c-.1-.15-.15-.3-.15-.45V35.323c0-.15.05-.275.15-.374a.572.572 0 0 1 .413-.188H41.99c.15 0 .274.063.374.188.125.1.187.224.187.374v4.532Zm9.74 27.757c-.35 0-.55-.175-.6-.524L44.95 35.36v-.15c0-.275.162-.412.487-.412h6.068c.374 0 .574.175.6.524l3.258 20.64c.025.124.063.187.112.187.075 0 .125-.063.15-.188l3.147-20.639c.025-.35.237-.524.637-.524h5.843c.4 0 .562.2.487.599l-6.742 31.727c-.075.35-.288.525-.637.525h-6.068v-.038Zm33.862-27.756a.567.567 0 0 1-.225.449.607.607 0 0 1-.375.112H75.74c-.15 0-.224.088-.224.263v7.416c0 .15.075.225.224.225h5.62c.174 0 .299.063.374.187.15.1.224.225.224.375v4.57c0 .15-.062.287-.187.412-.1.1-.225.15-.374.15h-5.62c-.174 0-.261.075-.261.224v7.492c0 .15.075.225.224.225h9.814c.15 0 .275.062.375.187.125.075.187.2.187.375v4.532c0 .15-.062.3-.187.45a.607.607 0 0 1-.375.112H69.447a.786.786 0 0 1-.412-.112c-.1-.15-.15-.3-.15-.45V35.323c0-.15.05-.275.15-.374a.572.572 0 0 1 .412-.188h16.107c.15 0 .275.063.375.188.125.1.187.224.187.374v4.532h.038Zm16.332 27.756c-.35 0-.575-.15-.675-.45l-3.596-12.96c-.075-.125-.15-.187-.225-.187h-1.61c-.15 0-.225.075-.225.224V67.05c0 .15-.062.3-.187.45a.607.607 0 0 1-.375.112h-5.506a.786.786 0 0 1-.412-.112c-.1-.15-.15-.3-.15-.45V35.323c0-.15.05-.275.15-.374a.573.573 0 0 1 .412-.188h9.477c1.748 0 3.284.425 4.607 1.274 1.349.799 2.385 1.948 3.109 3.446.749 1.498 1.124 3.221 1.124 5.17 0 1.847-.362 3.47-1.086 4.869-.7 1.423-1.673 2.522-2.922 3.296l-.112.15c-.05.025-.05.075 0 .15l4.307 13.86.038.186c0 .3-.175.45-.525.45h-5.618ZM96.38 40.455c-.15 0-.225.087-.225.262v7.979c0 .15.075.224.225.224h2.098c.998 0 1.785-.374 2.359-1.123.625-.774.937-1.798.937-3.072 0-1.323-.312-2.36-.937-3.109-.599-.8-1.386-1.199-2.36-1.199H96.38v.038Zm20.34 27.12a.643.643 0 0 1-.412-.15.644.644 0 0 1-.15-.412V54.8l-.038-.262-6.592-19.104v-.262c0-.275.162-.412.487-.412h5.731c.349 0 .574.15.674.45l2.884 11.237c.05.1.1.15.15.15.075 0 .125-.05.15-.15l2.922-11.237c.075-.3.287-.45.636-.45h5.769c.2 0 .35.063.45.188.074.1.074.25 0 .449l-6.593 19.104-.038.3V67.05c0 .15-.062.287-.187.412-.1.1-.225.15-.374.15h-5.507l.038-.037ZM25.097 101.399a.547.547 0 0 1-.337-.112.608.608 0 0 1-.113-.375V74.317c0-.15.038-.275.113-.374a.607.607 0 0 1 .374-.113h4.608c.125 0 .224.05.3.15.1.075.15.175.15.3v22.175c0 .125.062.187.187.187h8.278c.15 0 .262.05.337.15.1.075.15.175.15.3v3.82a.51.51 0 0 1-.15.375c-.075.075-.187.112-.337.112h-13.56Zm28.693 0c-.325 0-.5-.137-.524-.412l-.637-3.783c0-.15-.075-.225-.225-.225h-5.02c-.15 0-.224.075-.224.225l-.637 3.746c0 .299-.175.449-.524.449H41.39c-.324 0-.45-.174-.374-.524l5.806-26.595c.05-.3.212-.45.487-.45h5.319c.3 0 .474.138.524.412l5.769 26.633v.187c0 .25-.138.375-.412.375h-4.72v-.038Zm-5.843-8.877c0 .15.05.224.15.224h3.558c.125 0 .175-.074.15-.224l-1.873-10.75c0-.076-.025-.113-.075-.113-.075 0-.125.037-.15.112l-1.76 10.75Zm16.294 8.84a.723.723 0 0 1-.375-.113.829.829 0 0 1-.075-.374V90.649l-.037-.225-5.544-16.07v-.187c0-.25.125-.374.375-.374h4.87c.299 0 .486.137.561.412l2.435 9.44c.025.074.062.112.112.112.075 0 .125-.038.15-.113l2.435-9.44c.075-.249.262-.374.562-.374h4.832c.15 0 .275.05.374.15.075.075.075.2 0 .374l-5.543 16.07v10.451c0 .15-.063.275-.188.374-.075.075-.187.113-.337.113h-4.607Zm20.077.374c-2.422 0-4.357-.711-5.806-2.135-1.423-1.423-2.135-3.321-2.135-5.693V81.322c0-2.373.712-4.27 2.135-5.694 1.449-1.423 3.384-2.135 5.806-2.135 2.423 0 4.358.712 5.806 2.135 1.474 1.424 2.21 3.321 2.21 5.694v12.586c0 2.372-.749 4.27-2.247 5.693-1.424 1.424-3.346 2.135-5.769 2.135Zm0-4.794c.75 0 1.336-.25 1.76-.75.45-.499.675-1.173.675-2.022V81.06c0-.825-.225-1.486-.674-1.986-.425-.524-1.011-.786-1.76-.786-.75 0-1.337.25-1.761.749-.425.5-.637 1.173-.637 2.022v13.11c0 .825.212 1.5.637 2.024.45.5 1.036.749 1.76.749Zm18.804 4.794c-2.372 0-4.282-.749-5.73-2.247-1.424-1.498-2.136-3.471-2.136-5.918V74.28c0-.125.038-.225.112-.3a.6.6 0 0 1 .375-.15h4.607c.125 0 .225.05.3.15.125.075.187.175.187.3v19.852c0 .825.2 1.499.6 2.023.424.525.986.787 1.685.787.675 0 1.212-.25 1.611-.75.425-.549.637-1.248.637-2.097V74.28c0-.125.037-.225.112-.3.1-.1.225-.15.375-.15h4.57c.15 0 .262.05.337.15.1.075.15.175.15.3v19.29c0 2.473-.724 4.458-2.173 5.956-1.423 1.474-3.296 2.21-5.619 2.21Zm26.408-27.943c.125 0 .225.062.3.187.125.075.187.175.187.3v3.82a.46.46 0 0 1-.187.375.406.406 0 0 1-.3.112h-4.907c-.149 0-.224.063-.224.188v22.137c0 .15-.05.275-.15.375a.405.405 0 0 1-.3.112h-4.607a.607.607 0 0 1-.375-.112.607.607 0 0 1-.112-.375v-22.1c0-.15-.063-.225-.187-.225h-4.795a.724.724 0 0 1-.375-.112.833.833 0 0 1-.075-.375v-3.82c0-.125.038-.225.113-.3.1-.1.225-.15.374-.15h15.583l.037-.037Z"></path>
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12.605 23.842H140v88.139H12.605V23.842Zm3.259 3.259v81.621H136.74V27.101H15.864Z"
                                            ></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip666">
                                                <path
                                                    fill="currentColor"
                                                    d="M0 0h153.429v112H0z"
                                                    data-darkreader-inline-fill=""
                                                ></path>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <h3>
                                    <a href="https://every-layout.dev/">
                                        Every Layout
                                    </a>
                                </h3>
                                <p>
                                    A series of simple, composable layouts that
                                    can be ported to any project. There’s also
                                    heaps of learning material to help you{" "}
                                    <em>really</em> learn CSS layout.
                                </p>
                            </li>
                            <li className="stack">
                                <div aria-hidden="true">
                                    <svg
                                        viewBox="0 0 85 96"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M0 23.817v45.841a3.09 3.09 0 0 0 1.521 2.662L41.71 96l40.87-23.683a3.09 3.09 0 0 0 1.541-2.673V23.817L43.258.409a3.09 3.09 0 0 0-3.091.01L0 23.818Zm5.617 6.357v38.04L38.9 87.825V48.777L5.617 30.174Zm38.9 18.616v39.09l33.986-19.693V30.109L44.518 48.79Zm30.98-23.439L41.734 6.01 8.514 25.358l33.206 18.56L75.498 25.35Z"
                                            fill="currentColor"
                                            data-darkreader-inline-fill=""
                                        ></path>
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M41.709 59.627c6.515 0 11.796-5.281 11.796-11.796S48.224 36.034 41.71 36.034s-11.797 5.282-11.797 11.797c0 6.515 5.282 11.796 11.797 11.796Zm0 6.18c9.928 0 17.976-8.048 17.976-17.976 0-9.928-8.048-17.976-17.976-17.976-9.928 0-17.976 8.048-17.976 17.976 0 9.928 8.048 17.976 17.976 17.976Z"
                                            fill="currentColor"
                                            data-darkreader-inline-fill=""
                                        ></path>
                                        <circle
                                            cx="41.709"
                                            cy="47.831"
                                            r="12.358"
                                            fill="var(--spot-color)"
                                            data-darkreader-inline-fill=""
                                        ></circle>
                                    </svg>
                                </div>
                                <h3>
                                    <a href="https://piccalil.li/tutorial/what-are-design-tokens">
                                        Design Tokens
                                    </a>
                                </h3>
                                <p>
                                    Centralised data—almost like a database of
                                    design values—that could be consumed by
                                    anything that understands a standard, like
                                    JSON to help with design consistency.
                                </p>
                            </li>
                            <li className="stack">
                                <div aria-hidden="true">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        viewBox="0 0 120 120"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M112.135 59.995c.335 22.204-15.257 43.47-36.562 49.776-19.461 6.256-42.288-.178-55.305-16.023C7.045 78.514 3.98 55.41 13.057 37.352 21.455 19.31 40.945 7.29 60.837 7.885c20.018.004 39.136 12.854 46.934 31.252 2.898 6.546 4.412 13.697 4.364 20.858Z"
                                            fill="#fff"
                                            fill-opacity=".25"
                                            data-darkreader-inline-fill=""
                                        ></path>
                                        <path
                                            d="M60.064 11.735c-17.118-.098-33.978 9.586-42.152 24.744-9.559 16.443-7.764 38.392 4.09 53.214 11.62 15.408 32.994 22.148 51.424 16.645 20.176-5.494 35.133-25.448 34.803-46.342a46.607 46.607 0 0 0-1.678-12.634c-4.867-18.694-21.89-33.459-41.175-35.278a44.2 44.2 0 0 0-5.312-.349Zm.092 4.36c4.904.026 9.793.91 14.416 2.548v65.641H47.525V17.918a39.082 39.082 0 0 1 2.832-.695 40.673 40.673 0 0 1 9.799-1.129ZM42.242 19.83V99.98C26.846 93.153 15.945 76.89 16.23 59.895a41.795 41.795 0 0 1 .19-4.189c1.306-15.495 11.713-29.625 25.82-35.876Zm37.613 1.074c6.617 3.348 12.398 8.335 16.469 14.616 6.433 9.223 8.655 20.91 6.778 31.884H79.855v-46.5Z"
                                            fill="#fff"
                                            data-darkreader-inline-fill=""
                                        ></path>
                                    </svg>
                                </div>
                                <h3>
                                    <a href="https://a.paddle.com/v2/click/39438/105166?link=3110 ">
                                        Polypane
                                    </a>
                                </h3>
                                <p>
                                    A handy app that lets you spin up multiple
                                    viewports in various configurations to help
                                    you build truly responsive sites.
                                </p>
                            </li>
                            <li className="stack">
                                <div aria-hidden="true">
                                    <svg
                                        viewBox="0 0 254 254"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M126.998 69c-25.603 0-41.603 12.779-48.004 38.332 9.604-12.774 20.802-17.572 33.603-14.375 7.304 1.826 12.525 7.111 18.299 12.967 9.415 9.536 20.308 20.576 44.101 20.576 25.603 0 41.602-12.779 48.003-38.332-9.599 12.774-20.801 17.568-33.598 14.375-7.304-1.826-12.525-7.111-18.304-12.972C161.684 80.04 150.79 69 126.998 69Zm-47.995 57.5c-25.607 0-41.602 12.77-48.003 38.327 9.599-12.779 20.801-17.572 33.603-14.375 7.3 1.822 12.52 7.112 18.299 12.963C92.317 172.96 103.21 184 127.002 184c25.603 0 41.603-12.774 48.004-38.332-9.604 12.779-20.802 17.572-33.603 14.375-7.304-1.821-12.521-7.111-18.299-12.967-9.415-9.536-20.308-20.576-44.1-20.576Z"
                                            fill="currentColor"
                                            data-darkreader-inline-fill=""
                                        ></path>
                                    </svg>
                                </div>
                                <h3>
                                    <a href="https://github.com/tailwindlabs/tailwindcss">
                                        Tailwind
                                    </a>
                                </h3>
                                <p>
                                    A utility-first CSS framework that is very
                                    useful for generating utility classes on
                                    demand for CUBE CSS.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <svg>
                    <path d="m0 96 80-5.3C160 85 320 75 480 64s320-21 480-21.3c160 .3 320 10.3 400 16l80 5.3V0H0v96Z"></path>
                </svg>
            </article>
            <article className="stack">
                <div>
                    <h2>So with all that new knowledge:</h2>
                    <p>Go Forth And Build Excellent Websites.</p>
                </div>
            </article>
        </main>
    );
}

export default App;
