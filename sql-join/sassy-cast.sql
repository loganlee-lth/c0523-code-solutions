SELECT "a"."firstName",
       "a"."lastName"
FROM "actors" AS "a"
JOIN "castMembers" USING ("actorId")
JOIN "films" AS "f" USING ("filmId")
WHERE "f"."title" = 'Jersey Sassy';
