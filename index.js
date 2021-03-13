const worker = new Worker("/node_modules/sql.js/dist/worker.sql-asm.js")
console.log(worker)

worker.onmessage = event => {
  console.log(event.data);
};
worker.onerror = e => console.log("Worker error: ", e);
worker.postMessage({id:1,action:"open"});
worker.postMessage({id: 2,action: "exec",
  sql: "CREATE TABLE Person (username, password)"
});
worker.postMessage({id: 3,action: "exec",
  sql: "INSERT INTO Person (username, password) VALUES ('John','1234'), ('Doe','2345')"
});

worker.postMessage({id: 4,action: "exec",
  sql: "SELECT * FROM Person WHERE username=:name",
  params: {":name":"John"}
});

  