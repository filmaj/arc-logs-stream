This is a repro case for, what looks like, an arc `@tables` `stream` bug.

# Quickstart

    cd arc-logs-stream
    npm install
    npm start

Then load http://localhost:3333. The main http route should be creating and
saving objects to the db - and lists out all objects in the db via a `scan`. The
data stream handler simply logs out events.

# Expectations and Results

When running locally, we do not see the stream handler logging out to the console.

After deploying, after loading the site, we can once see objects listed from the
db via `scan`, but trying to load the logs via `arc logs` yields a Not Found
error:

```
➜ arc logs src/tables/data
         App ⌁ arc-logs-stream
      Region ⌁ us-west-2
     Profile ⌁ default
     Version ⌁ Architect 8.2.1
         cwd ⌁ /Users/filmaj/src/arc-logs-stream

Not found! Cannot find logs for Data
```
