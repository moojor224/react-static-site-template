import { React, ReactDOM } from "@moojor224/jstools";
import App from "./components/app";

ReactDOM.createRoot(document.getElementById("root")).render(<App>
    <main>
        <div>
            <h1>Welcome to my website!</h1>
            <p>this site is for pretty much anything that I do, like web development or electronics</p>
        </div>
        <div>
            <h2>Sections</h2>
        </div>
        <div>
            <section>
                <div>
                    <h3>Projects</h3>
                    <p>These projects are things that I have built involving electronics and 3D printing. </p>
                </div>
                <hr />
                <div>
                    <h3>Schoolwork</h3>
                    <section>
                        <div>
                            <h2>Daily Assignments</h2>
                            <p>these pages are the in-class assignments done for my beginning web programming class</p>
                        </div>
                        <div>
                            <h2>Homework</h2>
                            <p>These pages are all the homework assignment for my beginning web programming class</p>
                        </div>
                    </section>
                </div>
                <hr />
                <div>
                    <h2>Web Experiments</h2>
                    <p>Pages here are the equivalent of coding doodles, and are sorted
                        into categories based on the language they are mainly about. Some
                        may be fully functional tools, while others are just short demos
                        showing off a certain aspect that I think is useful</p>
                </div>
                <hr />
                <div>
                    <h2>Games</h2>
                    <p>This section is self explanatory. It's games</p>
                </div>
                <hr />
                <div>
                    <h2>External Pages</h2>
                    <p>These pages are for projects that I have worked on outside of
                        my personal time, and are not hosted on this site
                        (or just don't fit in any other category).</p>
                </div>
                <hr />
            </section>
        </div>
    </main>
</App>);
console.log("index.js loaded");