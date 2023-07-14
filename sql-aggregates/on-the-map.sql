SELECT "co"."name" AS "Country",
       COUNT(*) AS "Number of cities"
FROM "countries" AS "co"
JOIN "cities" AS "ci" ON "co"."countryId" = "ci"."countryId"
GROUP BY "co"."name";
