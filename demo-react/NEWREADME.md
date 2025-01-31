# Setup For (React Section):
//* 1. Visual Studio Code (VS Code):
* Install: ([VS Code](https://code.visualstudio.com/))
* Recommended Extensions:
     * Prettier - Code formatter
     * ESLint
     * Auto Rename Tag
     * ES7 JavaScript/Node/Mongoose/MongoDB-Mysql snippets
     * ES7 React/Redux/Styled-components snippets
     * ES7/React-Snippets
     * ES7+ React/Redux/React-Native snippets
     * Material Icon Theme
     * Tailwind CSS IntelliSense

//* 2. Node.js & NPM:
* Install: ([Node.js](https://nodejs.org/en/))  # Choose the stable version and not the recent version
* Verify Installation:
    * Run `node -v` and `npm -v` in the terminal.


//* 3. Create React with Vite 👍:
    * `npm create vite@latest project-name`
    * Select FrameWork : ` > React `
    * Select a Variant : ` > JavaScript + SWC `
    * Accessing project: ` cd project-name `
    * Install Dependancies: ` npm install axios rect-router-dom bootstrap`
    * Clear the content for App.jsx and remove App.css file
    * For Using Bootstrap: after intalling =>
            * In main.jsx: import the cdn for bootsrap link
               ` import 'bootstrap/dist/css/bootstrap.css'; `
    * For Using React Router DOM: After installing:
            * Import BrowserRouter in main.jsx:
                ` import { BrowserRouter } from "react-router-dom"; `
            * And add This tag
                ```
                createRoot(document.getElementById("root")).render(
                <BrowserRouter>
                    <App />
                </BrowserRouter>
                );
                ```
    * Tailwind CSS Framework (Optional): 
            * ` npm install -D tailwindcss@3.4.17 postcss@8.4.49 autoprefixer ` (Stable version of Tailwind with Vite)
            * ` npx tailwindcss init -p `
            * In tailwind.config.js:
                * Copy and paste this code ⏭️:
                    ```
                        /** @type {import('tailwindcss').Config} */
                        export default {
                        content: [
                            "./index.html",
                        "./src/**/*.{js,ts,jsx,tsx}",
                        ],
                        theme: {
                        extend: {
                        colors:{
                            primary: "#5F6FFF",
                            secondary: "#0baee1"
                            },
                        gridTemplateColumns: {
                            'auto': 'repeat(auto-fill, minmax(200px, 1fr))'
                        }
                        },
                        },
                        plugins: [],
                        }
                    ```
            * In index.css : Copy and paste this code for making responsive the app:
                    ```
                        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
                        @tailwind base;
                        @tailwind components;
                        @tailwind utilities;


                        //* For responsive app:
                        ::-webkit-scrollbar{
                            @apply hidden
                            }

                            @media (max-width:740px) {
                        .active p{
                            @apply text-white bg-secondary
                            }
                        }
                    ```
            * e. Testing if Tailwind support our Project:
            in App.jsx:
            <h1 className="text-green-500 text-center fs-1">Hello World!</h1>
# Setup For (Web Fundamentals Sesction Ressources):
