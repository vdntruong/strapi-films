module.exports = {
    /**
     * Simple example.
     * Every monday at 1am.
     */

    myJob: {
        task: ({ strapi }) => {
            // Add your own logic here (e.g. send a queue of email, create a database backup, etc.).
            console.log("F&ck you")
        },
        options: {
            rule:  "1 * * * * *",
        },
    },
};