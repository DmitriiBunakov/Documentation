const express = require('express')
const cors = require('cors');
const app = express();
app.use(cors());

app.get("/", (req, res) => {
    console.log(req, res);

    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();

    /*
    Store business logic here - Fetch from external sources (Message broker)
    */
    let counter = 0;
    let interval = setInterval(() => {
        counter++;
        // if (counter > 10) {
            // clearInterval(interval);
            // res.end();
        // }
        // res.write(`event: interval\n`);
        
        const data = {
            test: {
                person: {
                    name: 'Dima',
                    age: 28,
                },
            },
        }

        // res.write(`id: interval${counter} \n`);
        res.write(`data: test`);
        res.write(`\n\ndata: ${JSON.stringify(data)}\n\n`);
    }, 1000);

        res.on("close", () => {
            clearInterval(interval);

            res.end();
        });
    });

app.listen(5500, () => {
    console.log(`Example app listening at http://localhost:${5500}`);
});
