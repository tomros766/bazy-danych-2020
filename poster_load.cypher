LOAD CSV WITH HEADERS FROM 'file:///movies_py.csv' AS row
WITH toInteger(row.Movie_id) AS id,
toString(row.poster) as poster
match(m:Movie {movieId: id})
set m.poster = poster
return count(m)