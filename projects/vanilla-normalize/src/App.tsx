import { useState } from "react";
import "./props.css";
import "./reset.css";
import "./Normalize.css";
import "./layout.css";
// import "./buttons.css";

function App() {
    return (
        <div id="top" role="document" className="stack">
            <header role="banner">
                <div>
                    {/* <svg viewBox="0 0 200 200">
              <line x1="66" x2="66" y1="100" y2="175" stroke-width="25" />
              <circle cx="100" cy="100" r="35" fill="5" />
              <circle
                cx="100"
                cy="100"
                r="85"
                fill="transparent"
                stroke-width="25"
              />
            </svg> */}
                    <h1> Normalize Test</h1>
                </div>
                <p>
                    A{" "}
                    <a href="https://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css#:~:text=51-,Normalize.,over%20the%20styling%20of%20everything.">
                        normalize
                    </a>{" "}
                    using Open Props! Minimal styles for all HTML elements.
                    Plus, it's adaptive to light and dark. The props are made
                    available for you to continue building{" "}
                    <a href="https://codepen.io/argyleink/pen/jOLaBgG">
                        components
                    </a>{" "}
                    too. Try out a{" "}
                    <a href="http://localhost:3001">visited link</a>
                </p>
                <div className="stack">
                    <h4>Included adaptive props</h4>
                    <h3>4 Surface Colors</h3>
                    <p>
                        Great for cards, buttons, borders, sidenavs, wells, etc.
                        When you want to change the perception of layering and
                        grouping.
                    </p>
                    <div className="stack">
                        <div>var(--surface-1)</div>
                        <div>var(--surface-2)</div>
                        <div>var(--surface-3)</div>
                        <div>var(--surface-4)</div>
                    </div>
                </div>

                <div className="stack">
                    <h3>2 Text Colors, 2 link colors</h3>
                    <h5>
                        <span></span>
                        var(--link)
                    </h5>
                    <h5>
                        <span></span>
                        var(--link-visited)
                    </h5>
                    <h5>
                        <span></span>
                        var(--text-1)
                    </h5>
                    <h5>
                        <span></span>
                        var(--text-2)
                    </h5>
                    <p>
                        Using these props results in colors that adapt to the
                        users system theme preference automatically.
                    </p>
                    <p>
                        The brand color is used sparingly, find it used in the
                        HTML elements below! The link color is useful for
                        buttons and other custom components you want to have
                        consistent interactive text for.
                    </p>
                </div>
                <hr></hr>
                <h2>Normalized HTML5 Elemenets</h2>
                <p>
                    Based on{" "}
                    <a href="https://cbracco.github.io/html5-test-page">
                        this html5 test page
                    </a>
                    .
                </p>
            </header>
            <nav role="navigation">
                <ul>
                    <li>
                        <a href="#text">Text</a>
                        <ul>
                            <li>
                                <a href="#text__headings">Headings</a>
                            </li>
                            <li>
                                <a href="#text__paragraphs">Paragraphs</a>
                            </li>
                            <li>
                                <a href="#text__blockquotes">Blockquotes</a>
                            </li>
                            <li>
                                <a href="#text__lists">Lists</a>
                            </li>
                            <li>
                                <a href="#text__hr">Horizontal rules</a>
                            </li>
                            <li>
                                <a href="#text__tables">Tabular data</a>
                            </li>
                            <li>
                                <a href="#text__code">Code</a>
                            </li>
                            <li>
                                <a href="#text__inline">Inline elements</a>
                            </li>
                            <li>
                                <a href="#text__comments">HTML Comments</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#embedded">Embedded content</a>
                        <ul>
                            <li>
                                <a href="#embedded__images">Images</a>
                            </li>
                            <li>
                                <a href="#embedded__audio">Audio</a>
                            </li>
                            <li>
                                <a href="#embedded__video">Video</a>
                            </li>
                            <li>
                                <a href="#embedded__canvas">Canvas</a>
                            </li>
                            <li>
                                <a href="#embedded__meter">Meter</a>
                            </li>
                            <li>
                                <a href="#embedded__progress">Progress</a>
                            </li>
                            <li>
                                <a href="#embedded__svg">Inline SVG</a>
                            </li>
                            <li>
                                <a href="#embedded__iframe">IFrames</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#forms">Form elements</a>
                        <ul>
                            <li>
                                <a href="#forms__input">Input fields</a>
                            </li>
                            <li>
                                <a href="#forms__select">Select menus</a>
                            </li>
                            <li>
                                <a href="#forms__checkbox">Checkboxes</a>
                            </li>
                            <li>
                                <a href="#forms__radio">Radio buttons</a>
                            </li>
                            <li>
                                <a href="#forms__textareas">Textareas</a>
                            </li>
                            <li>
                                <a href="#forms__html5">HTML5 inputs</a>
                            </li>
                            <li>
                                <a href="#forms__action">Action buttons</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <main role="main" className="stack">
                <section id="text" className="stack">
                    <article id="text__headings" className="stack">
                        <div className="stack">
                            <h1>Heading 1</h1>
                            <h2>Heading 2</h2>
                            <h3>Heading 3</h3>
                            <h4>Heading 4</h4>
                            <h5>Heading 5</h5>
                            <h6>Heading 6</h6>
                        </div>
                    </article>
                    <article id="text__paragraphs" className="stack">
                        <header>
                            <h1>Paragraphs</h1>
                        </header>
                        <div>
                            <p>
                                A paragraph (from the Greek paragraphos, “to
                                write beside” or “written beside”) is a
                                self-contained unit of a discourse in writing
                                dealing with a particular point or idea. A
                                paragraph consists of one or more sentences.
                                Though not required by the syntax of any
                                language, paragraphs are usually an expected
                                part of formal writing, used to organize longer
                                prose.
                            </p>
                        </div>
                    </article>
                    <article id="text__blockquotes" className="stack">
                        <header>
                            <h1>Blockquotes</h1>
                        </header>
                        <div>
                            <blockquote>
                                <p>
                                    A block quotation (also known as a long
                                    quotation or extract) is a quotation in a
                                    written document, that is set off from the
                                    main text as a paragraph, or block of text.
                                </p>
                                <p>
                                    It is typically distinguished visually using
                                    indentation and a different typeface or
                                    smaller size quotation. It may or may not
                                    include a citation, usually placed at the
                                    bottom.
                                </p>
                                <cite>
                                    <a href="#!">Said no one, ever.</a>
                                </cite>
                            </blockquote>
                        </div>
                    </article>
                    <article id="text__lists" className="stack">
                        <header>
                            <h1>Lists</h1>
                        </header>
                        <div className="stack">
                            <h3>Definition list</h3>
                            <dl>
                                <dt>Definition List Title</dt>
                                <dd>This is a definition list division.</dd>

                                <dt>Definition List Title 2</dt>
                                <dd>
                                    This is a definition list division item with
                                    a lot more to say.
                                </dd>
                            </dl>
                            <h3>Ordered List</h3>
                            <ol>
                                <li>List Item 1</li>
                                <li>List Item 2</li>
                                <li>List Item 3</li>
                            </ol>
                            <h3>Unordered List</h3>
                            <ul>
                                <li>List Item 1</li>
                                <li>List Item 2</li>
                                <li>List Item 3</li>
                            </ul>
                            <h3>Details</h3>
                            <details>
                                <summary>Details and summary element</summary>

                                <p>Example paragraph text.</p>
                            </details>
                        </div>
                    </article>
                    <article id="text__hr" className="stack">
                        <header>
                            <h1>Horizontal rules</h1>
                        </header>
                        <div>
                            <hr></hr>
                        </div>
                    </article>
                    <article id="text__tables">
                        <header>
                            <h1>Tabular data</h1>
                        </header>
                        <table>
                            <caption>Table Caption</caption>
                            <thead>
                                <tr>
                                    <th>Table Heading 1</th>
                                    <th>Table Heading 2</th>
                                    <th>Table Heading 3</th>
                                    <th>Table Heading 4</th>
                                    <th>Table Heading 5</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Table Footer 1</th>
                                    <th>Table Footer 2</th>
                                    <th>Table Footer 3</th>
                                    <th>Table Footer 4</th>
                                    <th>Table Footer 5</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                    <td>Table Cell 1</td>
                                    <td>Table Cell 2</td>
                                    <td>Table Cell 3</td>
                                    <td>Table Cell 4</td>
                                    <td>Table Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Table Cell 1</td>
                                    <td>Table Cell 2</td>
                                    <td>Table Cell 3</td>
                                    <td>Table Cell 4</td>
                                    <td>Table Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Table Cell 1</td>
                                    <td>Table Cell 2</td>
                                    <td>Table Cell 3</td>
                                    <td>Table Cell 4</td>
                                    <td>Table Cell 5</td>
                                </tr>
                                <tr>
                                    <td>Table Cell 1</td>
                                    <td>Table Cell 2</td>
                                    <td>Table Cell 3</td>
                                    <td>Table Cell 4</td>
                                    <td>Table Cell 5</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                    <article id="text__code" className="stack">
                        <header>
                            <h1>Code</h1>
                        </header>
                        <div className="stack">
                            <p>
                                <strong>Keyboard input:</strong> <kbd>Cmd</kbd>
                            </p>
                            <p>
                                <strong>Inline code:</strong>{" "}
                                <code>&lt;div&gt;code&lt;/div&gt;</code>
                            </p>
                            <p>
                                <strong>Sample output:</strong>{" "}
                                <samp>
                                    This is sample output from a computer
                                    program.
                                </samp>
                            </p>
                            <h2>Pre-formatted text</h2>
                            <pre>
                                P R E F O R M A T T E D T E X T ! " # $ % &amp;
                                ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; &lt; =
                                &gt; ? @ A B C D E F G H I J K L M N O P Q R S T
                                U V W X Y Z [ \ ] ^ _ ` a b c d e f g h i j k l
                                m n o p q r s t u v w x y z {`{`} | {`}`} ~{" "}
                            </pre>
                        </div>
                    </article>
                    <article id="text__inline" className="stack">
                        <header>
                            <h1>Inline elements</h1>
                        </header>
                        <div className="stack">
                            <p>
                                <a href="#!">This is a text link</a>.
                            </p>
                            <p>
                                <strong>
                                    Strong is used to indicate strong
                                    importance.
                                </strong>
                            </p>
                            <p>
                                <em>This text has added emphasis.</em>
                            </p>
                            <p>
                                The <b>b element</b> is stylistically different
                                text from normal text, without any special
                                importance.
                            </p>
                            <p>
                                The <i>i element</i> is text that is offset from
                                the normal text.
                            </p>
                            <p>
                                The <u>u element</u> is text with an
                                unarticulated, though explicitly rendered,
                                non-textual annotation.
                            </p>
                            <p>
                                <del>This text is deleted</del> and{" "}
                                <ins>This text is inserted</ins>.
                            </p>
                            <p>
                                <s>This text has a strikethrough</s>.
                            </p>
                            <p>
                                Superscript<sup>®</sup>.
                            </p>
                            <p>
                                Subscript for things like H<sub>2</sub>O.
                            </p>
                            <p>
                                <small>
                                    This small text is small for for fine print,
                                    etc.
                                </small>
                            </p>
                            <p>
                                Abbreviation:{" "}
                                <abbr title="HyperText Markup Language">
                                    HTML
                                </abbr>
                            </p>
                            <p>
                                <q cite="./index_files/q">
                                    This text is a short inline quotation.
                                </q>
                            </p>
                            <p>
                                <cite>This is a citation.</cite>
                            </p>
                            <p>
                                The <dfn>dfn element</dfn> indicates a
                                definition.
                            </p>
                            <p>
                                The <mark>mark element</mark> indicates a
                                highlight.
                            </p>
                            <p>
                                The <var>variable element</var>, such as{" "}
                                <var>x</var> = <var>y</var>.
                            </p>
                            <p>
                                The time element:{" "}
                                <time dateTime="2013-04-06T12:32+00:00">
                                    2 weeks ago
                                </time>
                            </p>
                            <p>
                                <a href="mailto:name@example.com">
                                    name@example.com
                                </a>
                            </p>
                            <p>
                                <a href="tel:+9001234567">9001234567</a>
                            </p>
                            <p>
                                <a href="sms:"></a>Send a message
                            </p>
                            <code>
                                <a href="open-props.style">mono text as link</a>
                            </code>
                        </div>
                    </article>
                    <article id="text__comments" className="stack">
                        <header>
                            <h1>HTML Comments</h1>
                        </header>
                        <div>
                            <p>There is comment here: </p>
                            {/* <p>There is a comment spanning multiple tags and lines below here.</p>
                <p><a href="#!">This is a text link. But it should not be displayed in a comment</a>.</p>
                <p><strong>Strong is used to indicate strong importance. But, it should not be displayed in a comment</strong></p>
                <p><em>This text has added emphasis. But, it should not be displayed in a comment</em></p> */}
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    </article>
                </section>
                <section id="embedded" className="stack">
                    <header>
                        <h1>Embedded content</h1>
                    </header>
                    <article id="embedded__images" className="stack">
                        <header>
                            <h2>Images</h2>
                        </header>
                        <div className="stack">
                            <h5>
                                No <code>&lt;figure&gt;</code> element
                            </h5>
                            <p>
                                <img
                                    src="https://doodleipsum.com/420/outline?bg=7463D9&i=5493adbcd8a47597df8e1fc4b1b87733"
                                    alt="test for normalize"
                                />
                            </p>
                            <h5>
                                Wrapped in a <code>&lt;figure&gt;</code>{" "}
                                element, no <code>&lt;figcaption&gt;</code>
                            </h5>
                            <figure>
                                <img
                                    src={`https://doodleipsum.com/420/outline?bg=7463D9&i=5493adbcd8a47597df8e1fc4b1b87733`}
                                    alt="test for normalize"
                                />
                            </figure>
                            <h5>
                                Wrapped in a <code>&lt;figure&gt;</code>{" "}
                                element, with a <code>&lt;figcaption&gt;</code>
                            </h5>
                            <figure>
                                <img
                                    src="https://doodleipsum.com/420/outline?bg=7463D9&i=5493adbcd8a47597df8e1fc4b1b87733"
                                    alt="jnormalize test"
                                />
                                <figcaption>
                                    Here is a caption for this image.
                                </figcaption>
                            </figure>
                        </div>
                    </article>
                    <article id="embedded__audio" className="stack">
                        <header>
                            <h2>Audio</h2>
                        </header>
                        <div>
                            <audio controls>audio</audio>
                        </div>
                    </article>
                    <article id="embedded__video" className="stack">
                        <header>
                            <h2>Video</h2>
                        </header>
                        <div>
                            <video controls>video</video>
                        </div>
                    </article>
                    <article id="embedded__canvas" className="stack">
                        <header>
                            <h2>Canvas</h2>
                        </header>
                        <div>
                            <canvas>canvas</canvas>
                        </div>
                    </article>
                    <article id="embedded__meter" className="stack">
                        <header>
                            <h2>Meter</h2>
                        </header>
                        <div>
                            <meter defaultValue="2" min="0" max="10">
                                2 out of 10
                            </meter>
                        </div>
                    </article>
                    <article id="embedded__progress" className="stack">
                        <header>
                            <h2>Progress</h2>
                        </header>
                        <div>
                            <progress defaultValue=".5">progress</progress>
                        </div>
                    </article>
                    <article id="embedded__svg" className="stack">
                        <header>
                            <h2>Inline SVG</h2>
                        </header>
                        <div>
                            <svg width="100px" height="100px">
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="100"
                                    fill="#1fa3ec"
                                ></circle>
                            </svg>
                        </div>
                    </article>
                    <article id="embedded__iframe" className="stack">
                        <header>
                            <h2>IFrame</h2>
                        </header>
                        <div>
                            <iframe
                                src="./index_files/index.html"
                                height="300"
                                title="ifram-test"
                            ></iframe>
                        </div>
                    </article>
                </section>
                <section id="forms" className="stack">
                    <header>
                        <h1>Form elements</h1>
                    </header>
                    <form className="stack">
                        <fieldset id="forms__input" className="stack">
                            <legend>Input fields</legend>
                            <p>
                                <label htmlFor="input__text">Text Input</label>
                                <input
                                    id="input__text"
                                    type="text"
                                    placeholder="Text Input"
                                />
                            </p>
                            <p>
                                <label htmlFor="input__password">
                                    Password
                                </label>
                                <input
                                    id="input__password"
                                    type="password"
                                    placeholder="Type your Password"
                                />
                            </p>
                            <p>
                                <label htmlFor="input__webaddress">
                                    Web Address
                                </label>
                                <input
                                    id="input__webaddress"
                                    type="url"
                                    placeholder="http://yoursite.com"
                                />
                            </p>
                            <p>
                                <label htmlFor="input__emailaddress">
                                    Email Address
                                </label>
                                <input
                                    id="input__emailaddress"
                                    type="email"
                                    placeholder="name@email.com"
                                />
                            </p>
                            <p>
                                <label htmlFor="input__phone">
                                    Phone Number
                                </label>
                                <input
                                    id="input__phone"
                                    type="tel"
                                    placeholder="(999) 999-9999"
                                />
                            </p>
                            <p>
                                <label htmlFor="input__search">Search</label>
                                <input
                                    id="input__search"
                                    type="search"
                                    placeholder="Enter Search Term"
                                />
                            </p>
                            <p>
                                <label htmlFor="input__text2">
                                    Number Input
                                </label>
                                <input
                                    id="input__text2"
                                    type="number"
                                    placeholder="Enter a Number"
                                />
                            </p>
                            <p>
                                <label htmlFor="input__text3">Error</label>
                                <input
                                    id="input__text3"
                                    type="text"
                                    placeholder="Text Input"
                                />
                            </p>
                            <p>
                                <label htmlFor="input__text4">Valid</label>
                                <input
                                    id="input__text4"
                                    type="text"
                                    placeholder="Text Input"
                                />
                            </p>
                        </fieldset>
                        <fieldset id="forms__select" className="stack">
                            <legend>Select menus</legend>
                            <p>
                                <label htmlFor="select">Select</label>
                                <select id="select">
                                    <optgroup label="Option Group">
                                        <option>Option One</option>
                                        <option>Option Two</option>
                                        <option>Option Three</option>
                                    </optgroup>
                                </select>
                            </p>
                            <p>
                                <label htmlFor="select-multiple">Select</label>
                                <select id="select-multiple" multiple>
                                    <optgroup label="Option Group">
                                        <option>Option One</option>
                                        <option>Option Two</option>
                                        <option>Option Three</option>
                                    </optgroup>
                                </select>
                            </p>
                        </fieldset>
                        <fieldset id="forms__checkbox" className="stack">
                            <legend>Checkboxes</legend>
                            <ul>
                                <li>
                                    <label htmlFor="checkbox1">
                                        <input
                                            id="checkbox1"
                                            name="checkbox"
                                            type="checkbox"
                                            defaultChecked
                                        />{" "}
                                        Choice A
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="checkbox2">
                                        <input
                                            id="checkbox2"
                                            name="checkbox"
                                            type="checkbox"
                                        />{" "}
                                        Choice B
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="checkbox3">
                                        <input
                                            id="checkbox3"
                                            name="checkbox"
                                            type="checkbox"
                                        />{" "}
                                        Choice C
                                    </label>
                                </li>
                            </ul>
                        </fieldset>
                        <fieldset id="forms__radio" className="stack">
                            <legend>Radio buttons</legend>
                            <ul>
                                <li>
                                    <label htmlFor="radio1">
                                        <input
                                            id="radio1"
                                            name="radio"
                                            type="radio"
                                            defaultChecked
                                        />{" "}
                                        Option 1
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="radio2">
                                        <input
                                            id="radio2"
                                            name="radio"
                                            type="radio"
                                        />{" "}
                                        Option 2
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="radio3">
                                        <input
                                            id="radio3"
                                            name="radio"
                                            type="radio"
                                        />{" "}
                                        Option 3
                                    </label>
                                </li>
                            </ul>
                        </fieldset>
                        <fieldset id="forms__textareas" className="stack">
                            <legend>Textareas</legend>
                            <p>
                                <label htmlFor="textarea">Textarea</label>
                                <textarea
                                    id="textarea"
                                    rows={8}
                                    cols={48}
                                    placeholder="Enter your message here"
                                ></textarea>
                            </p>
                        </fieldset>
                        <fieldset id="forms__html5" className="stack">
                            <legend>HTML5 inputs</legend>
                            <p>
                                <label htmlFor="ic">Color input</label>
                                <input
                                    type="color"
                                    id="ic"
                                    defaultValue="#000000"
                                />
                            </p>
                            <p>
                                File input <input type="file" />
                            </p>
                            <p>
                                <label htmlFor="in">Number input</label>
                                <input
                                    type="number"
                                    id="in"
                                    min="0"
                                    max="10"
                                    defaultValue="5"
                                />
                            </p>
                            <p>
                                <label htmlFor="ir">Range input</label>
                                <input type="range" id="ir" defaultValue="10" />
                            </p>
                            <p>
                                <label htmlFor="ir">Progress input</label>
                                <progress></progress>
                                <progress defaultValue=".5">50%</progress>
                            </p>
                            <p>
                                <label htmlFor="idd">Date input</label>
                                <input
                                    type="date"
                                    id="idd"
                                    defaultValue="1970-01-01"
                                />
                            </p>
                            <p>
                                <label htmlFor="idm">Month input</label>
                                <input
                                    type="month"
                                    id="idm"
                                    defaultValue="1970-01"
                                />
                            </p>
                            <p>
                                <label htmlFor="idw">Week input</label>
                                <input
                                    type="week"
                                    id="idw"
                                    defaultValue="1970-W01"
                                />
                            </p>
                            <p>
                                <label htmlFor="idt">Datetime input</label>
                                <input
                                    type="datetime"
                                    id="idt"
                                    defaultValue="1970-01-01T00:00:00Z"
                                />
                            </p>
                            <p>
                                <label htmlFor="idtl">
                                    Datetime-local input
                                </label>
                                <input
                                    type="datetime-local"
                                    id="idtl"
                                    defaultValue="1970-01-01T00:00"
                                />
                            </p>
                        </fieldset>
                        <fieldset id="forms__action" className="stack">
                            <legend>Action buttons</legend>
                            <p>
                                <input
                                    type="submit"
                                    defaultValue="&lt;input type=submit&gt;"
                                />
                                <input
                                    type="button"
                                    defaultValue="&lt;input type=button&gt;"
                                />
                                <input
                                    type="reset"
                                    defaultValue="&lt;input type=reset&gt;"
                                />
                                <input
                                    type="submit"
                                    defaultValue="&lt;input disabled&gt;"
                                    disabled
                                />
                            </p>
                            <br></br>
                            <p>
                                <button type="submit">
                                    &lt;button type=submit&gt;
                                </button>
                                <button type="button">
                                    &lt;button type=button&gt;
                                </button>
                                <button type="reset">
                                    &lt;button type=reset&gt;
                                </button>
                                <button type="button" disabled>
                                    &lt;button disabled&gt;
                                </button>
                            </p>
                        </fieldset>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default App;
