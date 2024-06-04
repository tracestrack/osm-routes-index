#!/usr/bin/env fish

for sql in (ls *.sql)
    PGPASSWORD=sw psql -U postgres -h gis-server -d gis -f $sql > $sql.results
    set dname (echo $sql | sed 's/dump_//'| sed 's/\.sql//')
    echo $dname
    ./create_json_routes_db.js $sql.results $dname
end

rm -rf ../static/*_routes
mv *_routes ../static/
./updatedate
