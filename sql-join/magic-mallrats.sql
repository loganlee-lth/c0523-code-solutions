SELECT "c"."firstName",
       "c"."lastName"
FROM "rentals"
JOIN "inventory" USING ("inventoryId")
JOIN "customers" AS "c" USING ("customerId")
JOIN "films" AS "f" USING ("filmId")
WHERE "f"."title" = 'Magic Mallrats';
