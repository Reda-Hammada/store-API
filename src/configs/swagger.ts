const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "store sass API",
            version: "0.1.0",
            description: "This is a store sass API",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Reda Hammada",
                email: "hammada.reda.dev@gmail.com",
            },
        },
    servers: [
        {
            url: "http://localhost:8001",
        },
    ],
},
apis: ["./routes/*.ts"],
};
export const specs = swaggerJsdoc(options);
export const swaggerUi = require("swagger-ui-express");
