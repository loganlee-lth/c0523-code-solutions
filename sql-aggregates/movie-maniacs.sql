SELECT "c"."firstName",
       "c"."lastName",
       sum("p"."amount") AS "total amount"
FROM "customers" AS "c"
JOIN "payments" AS "p" ON "c"."customerId" = "p"."customerId"
GROUP BY "c"."customerId"
ORDER BY "total amount" DESC;
