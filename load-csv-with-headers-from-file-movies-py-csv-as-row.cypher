LOAD CSV WITH HEADERS FROM 'file:///movies_py.csv' AS row
WITH toInteger(row.Movie_id) AS id,
toFloat(row.vote_average) as average
match(m:Movie {movieId: id})
set m.vote_avg = average
return count(m)