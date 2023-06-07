#!/usr/bin/env fish

rm *.toml

for i in (ls ../../../static/road_routes)
    cat road |sed "s/cn/$i/g" |sed 's/.json//g' >> menus.$i.toml
end

for i in (ls ../../../static/bus_routes)
    cat bus |sed "s/cn/$i/g" |sed 's/.json//g' >> menus.$i.toml
end

for i in (ls ../../../static/subway_routes)
    cat subway |sed "s/cn/$i/g" |sed 's/.json//g' >> menus.$i.toml
end

for i in (ls ../../../static/train_routes)
    cat train |sed "s/cn/$i/g" |sed 's/.json//g' >> menus.$i.toml
end

for i in (ls ../../../static/railway_routes)
    cat railway |sed "s/cn/$i/g" |sed 's/.json//g' >> menus.$i.toml
end

for i in (ls ../../../static/bicycle_routes)
    cat bicycle |sed "s/cn/$i/g" |sed 's/.json//g' >> menus.$i.toml
end

for i in (ls ../../../static/hiking_routes)
    cat hiking |sed "s/cn/$i/g" |sed 's/.json//g' >> menus.$i.toml
end

for i in (ls ../../../static/horse_routes)
    cat horse |sed "s/cn/$i/g" |sed 's/.json//g' >> menus.$i.toml
end

for i in (ls ../../../static/ferry_routes)
    cat ferry |sed "s/cn/$i/g" |sed 's/.json//g' >> menus.$i.toml
end
