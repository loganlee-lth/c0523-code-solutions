SELECT "g"."name" AS "genre",
       count(*)
FROM "genres" AS "g"
JOIN "filmGenre" AS "fg" ON "g"."genreId" = "fg"."genreId"
JOIN "castMembers" AS "cm" ON "fg"."filmId" = "cm"."filmId"
JOIN "actors" AS "a" ON "cm"."actorId" = "a"."actorId"
WHERE "a"."firstName" = 'Lisa'
  AND "a"."lastName" = 'Monroe'
GROUP BY "g"."name";
