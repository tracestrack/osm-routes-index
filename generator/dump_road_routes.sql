select a.id, ST_AsText(ST_Transform(ST_PointOnSurface(b.way),
4326), 3857) AS way, a.tags::hstore from planet_osm_rels as a inner join planet_osm_line as b on
substring(a.members[1], 2)::BIGINT = b.osm_id where a.tags::hstore->'route' in
('road') and a.tags::hstore ? 'name';
