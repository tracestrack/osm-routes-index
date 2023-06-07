# OpenStreetMap Routes Index

## What?

This project attemps to make route relations in OpenStreetMap more visible and
useful by listing certain routes based on country and tag criteria. For example
it's easy to create a table listing all bus routes from a certain station.

## Route database

If you have a working OpenStreetMap database as described in
[gravitystorm/openstreetmap-carto](https://github.com/gravitystorm/openstreetmap-carto),
you can dump the road routes with following SQL:

```
select a.id, ST_AsText(ST_Transform(ST_PointOnSurface(b.way),
4326), 3857) AS way, a.tags::hstore from planet_osm_rels as a inner join planet_osm_line as b on
substring(a.members[1], 2)::BIGINT = b.osm_id where a.tags::hstore->'route' in
('road') and a.tags::hstore ? 'name' and a.tags::hstore ? 'ref'
```

It contains the route relation ID, tags, a random coordinate of the route (can
be reverse geocoded to find country). There is a script in `generator` folder to
dump all route relations and classify the routes into countries.

## Build locally

The database is self-contained in the git repository. You only need to install
`hugo` to build the blog locally. To the the complete installation guide, please
visit [Hugo Installation](https://gohugo.io/installation/). Note you'll need the
*extended* version.

If you are on macOS, `brew install hugo` will be enough.
