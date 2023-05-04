# HighwayRouteDB

## What?

In this project we want to provide an index of road routes per
country so that users can find a specific route. It roughly replaces the wiki
page for example [China Expressways](https://wiki.openstreetmap.org/wiki/China/Transport/Expressways).

## How?

If you have set up an OpenStreetMap database as described in
[gravitystorm/openstreetmap-carto](https://github.com/gravitystorm/openstreetmap-carto),
you can dump the route relations with following SQL:

```
select a.id, a.tags::hstore, ST_AsText(ST_Transform(ST_PointOnSurface(b.way),
4326), 3857) AS way from planet_osm_rels as a inner join planet_osm_line as b on
substring(a.members[1], 2)::BIGINT = b.osm_id where a.tags::hstore->'route' in
('road');
```

It contains the route relation ID, tags, a random coordinate of the route (can be used in
reverse geocoding to find country). An output can be found in this repo with
filename "all_road_route.tar.gz".
