# Next JS Official Tutorial

This is based on the project from the next.js people, 

1. https://nextjs.org/learn/react-foundations - React Basics
1. https://nextjs.org/learn - Dashboard App

## Next JS React Foundations Course

1. https://nextjs.org/learn/react-foundations/what-is-react-and-nextjs
1. https://nextjs.org/learn/react-foundations/rendering-ui
1. https://nextjs.org/learn/react-foundations/updating-ui-with-javascript
    1. Imperative programming
        1. [Bootstrap Starter Project That Uses Imperative Programming](https://github.com/Jay-study-nildana/FrontEndForStudents/tree/main/BootstrapForStudents/Bootstrap5/Bootstrap5TemplateStarterAmeeshaPatel)
    1. Declarative programming
        1. [React JS Starter Project That Uses Declarative programming](https://github.com/Jay-study-nildana/FrontEndForStudents/tree/main/ReactJSForStudents/reactjsstartertemplate)
        1. [React JS Starter Project with Redux That Uses Declarative programming](https://github.com/Jay-study-nildana/FrontEndForStudents/tree/main/ReactJSForStudents/redux-toolkit-nasa-apod)
1. https://nextjs.org/learn/react-foundations/getting-started-with-react
    1. [RF-4-GettingStarted](RF-4-GettingStarted)
        1. use live preview extension to see output
1. https://nextjs.org/learn/react-foundations/building-ui-with-components
    1. [RF-5-building-ui](RF-5-building-ui)
        1. use live preview extension to see output    
1. https://nextjs.org/learn/react-foundations/displaying-data-with-props
    1. [RF-6-displayingdata](RF-6-displayingdata)   
        1. use live preview extension to see output
1. https://nextjs.org/learn/react-foundations/updating-state
    1. [RF-7-addinginteractivity](RF-7-addinginteractivity)
        1. use live preview extension to see output
1. https://nextjs.org/learn/react-foundations/from-react-to-nextjs
1. https://nextjs.org/learn/react-foundations/installation 
    1. [RF-9-installingnextjs](RF-9-installingnextjs)
        1. 'npm run dev' to see output
        1. but the output is actualy error (this is expected)
1. https://nextjs.org/learn/react-foundations/server-and-client-components
    1. Server and Client Environments  
    1. Network Boundary
    1. [RF-10-serverclient](RF-10-serverclient)  
        1. 'npm run dev' to see output

## Next.js App Router Course

1. Final code available here: https://github.com/Jay-study-nildana/VercelDashboardApp 

Table of Contents

1. https://nextjs.org/learn/dashboard-app/getting-started
    1. [DA-1-GettingStarted](DA-1-GettingStarted)
        1. 'npm run dev' to see output
1. https://nextjs.org/learn/dashboard-app/css-styling
    1. [DA-2-CSSStyling](DA-2-CSSStyling)    
1. https://nextjs.org/learn/dashboard-app/optimizing-fonts-images
    1. [DA-3-OptimizingFontImages](DA-3-OptimizingFontImages)    
1. https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages
    1. [DA-4-LayoutsPages](DA-4-LayoutsPages)
1. https://nextjs.org/learn/dashboard-app/navigating-between-pages
    1. [DA-5-Navigating](DA-5-Navigating)  
1. https://nextjs.org/learn/dashboard-app/setting-up-your-database
    1. [DA-6-Database](DA-6-Database)      
1. https://nextjs.org/learn/dashboard-app/fetching-data
    1. [DA-7-FetchingData](DA-7-FetchingData)
1. https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering
    1. [DA-8-Rendering](DA-8-Rendering)
1. https://nextjs.org/learn/dashboard-app/streaming
    1. [DA-9-Streaming](DA-9-Streaming)    
1. https://nextjs.org/learn/dashboard-app/partial-prerendering
    1. This is just theory as of now.
1. https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
    1. [DA-11-SearchPagination](DA-11-SearchPagination)
1. https://nextjs.org/learn/dashboard-app/mutating-data
    1. [DA-12-MutatingData](DA-12-MutatingData)
1. https://nextjs.org/learn/dashboard-app/error-handling
    1. [DA-13-ErrorHandling](DA-13-ErrorHandling)    
1. https://nextjs.org/learn/dashboard-app/improving-accessibility
    1. [DA-14-ImprovingAccessibility](DA-14-ImprovingAccessibility)
1. https://nextjs.org/learn/dashboard-app/adding-authentication
    1. [DA-15-Authentication](DA-15-Authentication)    
    1. remember to update the authentication variables in the vercel dashboard before deployment. 
1. https://nextjs.org/learn/dashboard-app/adding-metadata
    1. [DA-16-Metadata](DA-16-Metadata)    
1. https://nextjs.org/learn/dashboard-app/next-steps
    1. what can you do next?
    1. https://vercel.com/templates?framework=next.js
    1. https://www.youtube.com/@VercelHQ/videos    
1. app main URLs to explore
    1. http://localhost:3000/
    1. http://localhost:3000/dashboard    
    1. http://localhost:3000/dashboard/invoices
    1. http://localhost:3000/dashboard/customers

## About .env file and setting up PostGres

1. First, you should create a .env file
1. Copy the env secrets from your Vercel Dashboard and put it in this env file
1. the env file is not pushed. but, you can look at, [.env.example](.env.example)        
1. VERY IMPORTANT: make sure your gitignore is ignoring .env file. 
1. run the 'npm run seed' command and you should see something like this.
    ```
    Created "users" table
    Seeded 1 users
    Created "customers" table
    Seeded 10 customers
    Created "invoices" table
    Seeded 15 invoices
    Created "revenue" table
    Seeded 12 revenue
    ```
1. You should also check the data in the vercel dashboard and see the seeded data. Try a simple query like this.
    ```
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
    ```
1. artificial delay.
    1. in file data.ts, I have added a artificial delay of 3 seconds to simulate slow network access. you can comment it or uncomment it as required.
    1. here is the exact snippet.
        ```
            console.log('Fetching revenue data...');
            await new Promise((resolve) => setTimeout(resolve, 3000));

            const data = await sql<Revenue>`SELECT * FROM revenue`;

            console.log('Data fetch completed after 3 seconds.');
        ```
1. more stuff

## Things to remember

1. when you install node js, remember to check mark, 'install additional tools' like chocolatey.
1. installing packages of react, react-dom and can take a long time. like 5 to 10 minutes or more. 
1. deployment
    1. https://vercel.com/docs/projects/environment-variables - you will have to update the environment variables, especially, AUTH_SECRET and AUTH_URL, for deployment to work on vercel.
1. npm run lint - see linting errors (like for catch accessibility issues)
1. npm run dev - see output

# hire and get to know me

find ways to hire me, follow me and stay in touch with me.

1. https://jay-study-nildana.github.io/developerprofile/
1. https://thechalakas.com
