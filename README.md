APIs used
--BASE_URL = "https://dummyjson.com"
URL = "https://dummyjson.com/products"--GET
URL = "https://dummyjson.com/products/add"--POST
URL = "https://dummyjson.com/products/1"--PUT,PATCH,DELETE


What was tested?
Methods: Verified that POST creates, PUT replaces, and PATCH updates.

Params: Used :id (Path) to find items and ?userId (Query) to filter them.

Body: Sent JSON data to ensure the server mirrors back the correct fields.

Tests: Wrote scripts to auto-check for 200 OK statuses and valid JSON.


Errors & Learnings
Errors: Encountered 404 (wrong ID) and 415 (missing Content-Type header).

Learnings: Confirmed that dummy APIs don't save data permanently (Stateless) and mastered the difference between a full update (PUT) and a partial one (PATCH). 