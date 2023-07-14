SELECT "f"."releaseYear",
       "g"."name" AS "genre"
FROM "films" AS "f"
JOIN "filmGenre" USING ("filmId")
JOIN "genres" AS "g" USING ("genreId")
WHERE "f"."title" = 'Boogie Amelie';
