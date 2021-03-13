# SQLJs-And-IndexedDb-playGround

Playground to test how SQLJs database can be persisted on IndexedDb

## Prerequisite
Run npm install
 
### Scenario 1 (Import to IndexedDb from SQLJs)
- Open index.html
- Click InitSQLJS (It will create SQL database, create table Person and insert John's info)
- Click Query John (Verify that data was inserted)
- Click Import SQLJs to IndexedDb (This will export SQLJs Db, check if IndexedDb exists, if not create it and save the DB)

### Scenario 2 (Import to SQLJs from IndexedDb)
- Refresh browser, or re-open index.html
- Click Import IndexedDb to SQLJs
- Click Query John to verify if Db was imported from indexedDb
